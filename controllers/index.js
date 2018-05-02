const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.use('/', require('./home'));
router.use('/login-signup', require('./login-signup'));
router.use('/feedback', require('./feedback'));
router.use('/pizza-order', require('./pizza-order'));
router.use('/aboutus', require('./aboutus'));
router.use('/order-confirmation', require('./order-confirmation'));


module.exports = router;
