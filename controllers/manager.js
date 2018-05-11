const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

const router = express.Router();

router.get('/', (req, res) => {
     models.CustomersNotifications.findAll({}).then((customers) => {
         customers = customers.reverse();
        res.render('manager', {customers});
    })
});


router.get('/login-signup',
	passport.redirectIfManagerLoggedIn('/manager'),
	(req, res) => {
 		res.render('login-signup', {error: req.flash('error')} );
})

//router.post('/', (req, res) => {
//  res.redirect('/pizza-order');
//});










module.exports = router;

