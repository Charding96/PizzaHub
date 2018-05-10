const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    models.Stores.findAll({}).then((stores) => {
    res.render('map',{stores});
    });
});

//router.post('/', (req, res) => {
//  res.redirect('/pizza-order');
//});














module.exports = router;