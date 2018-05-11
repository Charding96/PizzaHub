const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');


const router = express.Router();

router.get('/', (req, res) => {
 res.render('driver');
});

router.get('/login-signup',
	passport.redirectIfDelivererLoggedIn('/driver'),
	(req, res) => {
 		res.render('login-signup', {error: req.flash('error')} );
})

router.post('/', (req, res) => {
  res.json('Success');
});














module.exports = router;