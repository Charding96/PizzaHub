const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const router = express.Router();

router.get('/', 
	passport.redirectIfLoggedIn('/pizza-order'),
	(req, res) => {
 		res.render('login-signup', {error: req.flash('error')} );
});

router.post('/register', passport.redirectIfLoggedIn('/pizza-order'), (req, res) => {
  req.checkBody('firstName', 'firstName is required').notEmpty();
  req.checkBody('lastName', 'lastName is required').notEmpty();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('email', 'email is required').notEmpty();
  req.checkBody('email', 'Invalid email').isEmail();
  req.checkBody('firstName', 'firstName is required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
  	res.render('login-signup', {errors: errors})
  }else {
  	models.Customers.create({
  		firstName: req.body.firstName,
  		lastName: req.body.lastName,
  		username: req.body.username,
  		email: req.body.email,
  		password_hash: req.body.password,
  	}).then((customer) => {
  			models.CustomerNotifications.create({
  				firstName: customer.firstName,
  				lastName: customer.lastName,
  				username: customer.username,
  				email: customer.email,
  				accepted: false,
  				storeSuggested: 1,
  			}).then((notification) => {
  				req.login(customer, ()=> {
  					res.redirect('/pizza-order');
  				});
  			});
  	}).catch((err) => {
  		console.log(err);
  		res.render('login-signup');
  	});

  }
  
});


router.post('/login', (req, res) => {
  passport.authenticate('local', {
  	successRedirect: '/pizza-order',
  	failureRedirect: '/login-signup',
  	failureFlash: true,
  	successFlash: true,
  })(req, res);
});














module.exports = router;