const express = require('express');
const router = express.Router();

//@Route GET api/users/test
//@Desc  Tests users route
//@Access Public
router.get('/test', (req, res) => console.log(res.json({ msg: 'Users API' })));

module.exports = router;
