const express = require('express');
const models = require('../models');

const router = express.Router();


router.get('/', (req, res) => {
 res.render('homepage');
});

router.get('/:storeId', (req, res) => {
    let storeId = req.params.storeId;
    res.render('homepage',{store: storeId});
})

router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});


module.exports = router;
