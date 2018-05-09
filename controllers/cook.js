const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    models.Pizzas.findAll({}).then((orders) => {
        res.render('cook',{orders});
    })
});

router.post('/', (req, res) => {
  res.json('Success');
});














module.exports = router;