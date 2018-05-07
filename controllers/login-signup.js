const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
 res.render('login-signup');
});

router.post('/', (req, res) => {
  res.redirect('/pizza-order');
});














module.exports = router;