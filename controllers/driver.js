const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
 res.render('driver');
});

router.post('/', (req, res) => {
  res.json('Success');
});














module.exports = router;