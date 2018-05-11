const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');


const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
    	where: {
    		CookId: req.cook.id,
    	}
    }).then((orders) => {
        orders = orders.reverse();
        res.render('cook',{orders});
    })
});

router.get('/login-signup',
	passport.redirectIfCookLoggedIn('/cook'),
	(req, res) => {
 		res.render('login-signup', {error: req.flash('error')} );
})

router.post('/', (req, res) => {
  res.json('Success');
});














module.exports = router;