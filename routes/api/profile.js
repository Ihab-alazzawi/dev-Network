const express = require('express');
const router = express.Router();

//@Route GET api/profile/test
//@Desc  Tests profile route
//@Access Public
router.get('/test', (req, res) =>
  console.log(res.json({ msg: 'Profile API' }))
);

module.exports = router;
