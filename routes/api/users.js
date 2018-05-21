const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateSigninInput = require('../../validation/signin');

//@Route GET api/users/test
//@Desc  Tests users route
//@Access Public
router.get('/test', (req, res) => console.log(res.json({ msg: 'Users API' })));

//@Route POST api/users/signup
//@Desc  Register user
//@Access Public

router.post('/signup', (req, res) => {
  //use isValid and errors from validateSignupInput function for input validation
  const { isValid, errors } = validateSignupInput(req.body);
  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', //Size
        r: 'pg', //Rating
        d: 'mm' //Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@Route POST api/users/signin
//@Desc  signin User / Returning JWT
//@Access Public

router.post('/signin', (req, res) => {
  //use isValid and errors from validateSigninInput function for input validation
  const { isValid, errors } = validateSigninInput(req.body);
  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //Find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        res.status(404).json(errors);
      }
      //Check password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            //if user match create JWT Payload and sign token
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({ success: true, token: 'Bearer ' + token });
              }
            );
          } else {
            errors.password = 'Password incorrect';
            return res.status(404).json(errors);
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

//@Route POST api/users/current
//@Desc  return current user
//@Access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
  }
);

module.exports = router;
