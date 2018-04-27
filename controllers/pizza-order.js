const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
 res.render('pizza-order');
});

router.post('/', (req, res) => {
  //res.render('pizza-order');
});














module.exports = router;