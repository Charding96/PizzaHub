const express = require('express');
const redirect = require('../middlewares/redirect');

const router = express.Router();

router.get('/', (req,res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;