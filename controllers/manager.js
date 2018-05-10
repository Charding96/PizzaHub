const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
     models.Customers.findAll({}).then((customers) => {
         customers = customers.reverse();
        res.render('manager', {customers});
    })
});

//router.post('/', (req, res) => {
//  res.redirect('/pizza-order');
//});














module.exports = router;