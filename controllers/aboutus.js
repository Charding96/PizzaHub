const express = require('express');
const models = require('../models');

const router = express.Router();


router.get('/', (req, res) => {
 res.render('about-us');
});



module.exports = router;