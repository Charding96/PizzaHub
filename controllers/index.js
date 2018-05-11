const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.use('/', require('./home'));
router.use('/login-signup', require('./login-signup'));
router.use('/feedback', require('./feedback'));
router.use('/pizza-order', require('./pizza-order'));
router.use('/aboutus', require('./aboutus'));
router.use('/cook',require('./cook'));
router.use('/manager', require('./manager'));
router.use('/order-confirmation', require('./order-confirmation'));
router.use('/logout', require('./logout'));


module.exports = router;
