const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//@Route GET api/users/test
//@Desc  Tests users route
//@Access Public
router.get('/test', (req, res) => console.log(res.json({ msg: 'Users API' })));

//@Route POST api/users/signup
//@Desc  Register user
//@Access Public

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
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
  const email = req.body.email;
  const password = req.body.password;
  //Find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.status(404).json({ email: 'User not found' });
      }
      //Check password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            res.json({ msg: 'Success' });
          } else {
            return res.status(404).json({ password: 'Password incorrect' });
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
