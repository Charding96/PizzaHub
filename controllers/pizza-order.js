const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
 let isOrdered = false;
 res.render('pizza-order', {ordered: isOrdered});
});

router.post('/', (req, res) => {
  let total = 0;
  let subtotal = 0;
  const tax = 0.08;
  let size = req.body.size;
  let sizePrice = 0;
  models.Prices.findOne({
    where:{
      category: 'size',
      description: size
    }

  }).then((price) => {
    sizePrice = price;
  })

  let sauce = parseFloat(req.body.sauce);
  let crust = parseFloat(req.body.crust);
  let tip = 0;
  if(req.body.tip !== undefined){
  	tip = parseFloat(req.body.tip);
  }
  let delivery = 0;
  if(req.body.deliverOption !== undefined){
  	delivery = parseFloat(req.body.deliveryOption);
   }
  let options = 0;

  if(req.body.options !== undefined){
	  if(req.body.options.length < 2){
	  	options = parseFloat(req.body.options);
	  }
	  else {
	  	options = req.body.options.reduce((optionA, optionB) => {
	  						return parseFloat(optionA) + parseFloat(optionB);
	  				});
	  }
 }
  let toppings = 0
 if(req.body.toppings !== undefined){
	  if(req.body.toppings.length < 2){
	  	toppings = parseFloat(req.body.toppings);
	  }
	  else {
	  	toppings = req.body.toppings.reduce((toppingA, toppingB) => {
	  						return parseFloat(toppingA) + parseFloat(toppingB);
	  				});
	  }
 }
  let street = req.body.street;
  let city = req.body.city;
  let zip = req.body.zip;
  let message = req.body.message;
  let tel = req.body.tel;
  let email = req.body.email;
  let isOrdered = true;
  subtotal = sizePrice + sauce + crust + delivery + options + toppings;
  total = (subtotal * (1 + tip)) * ( 1 + tax);
  res.render('pizza-order', {ordered: isOrdered, sizePrice: sizePrice, size: size, subtotal: subtotal, delivery: delivery, total: total, tax: tax, tip: tip, street: street, city: city, zip: zip, message: message, tel: tel, email: email});
  //res.json(crust);
});





module.exports = router;