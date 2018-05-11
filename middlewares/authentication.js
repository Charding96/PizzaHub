const bcrypt = require('bcrypt-nodejs');
//Anthentication middleware for Node.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Customer = require('../models').Customers;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use('customer', new LocalStrategy({ usernameField: 'username',}, (username, password, done) => {
    Customer.findOne({
      where: { username },
    }).then((customer) => {
      if(!customer) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      if (passwordsMatch(password, customer.password_hash) === false) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, customer, { message: 'Successfully Logged In!' });
    });
  })
);

passport.use('manager', new LocalStrategy({ usernameField: 'username',}, (username, password, done) => {
    Manager.findOne({
      where: { username },
    }).then((manager) => {
      if(!manager) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      if (passwordsMatch(password, manager.password_hash) === false) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, manager, { message: 'Successfully Logged In!' });
    });
  })
);

passport.use('cook', new LocalStrategy({ usernameField: 'username',}, (username, password, done) => {
    Cook.findOne({
      where: { username },
    }).then((cook) => {
      if(!cook) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      if (passwordsMatch(password, cook.password_hash) === false) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, cook, { message: 'Successfully Logged In!' });
    });
  })
);

passport.use('deliverer', new LocalStrategy({ usernameField: 'username',}, (username, password, done) => {
    Deliverer.findOne({
      where: { username },
    }).then((deliverer) => {
      if(!deliverer) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      if (passwordsMatch(password, deliverer.password_hash) === false) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, deliverer, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((customer, done) => {
  done(null, customer.id);
});

passport.deserializeUser((id, done) => {
  Customer.findById(id).then((customer) => {
    if (!customer) {
      return done(null, false);
    }
    return done(null, customer);
  });
});

passport.redirectIfCustomerLoggedIn = (route) =>
  (req, res, next) => (req.customer ? res.redirect(route) : next());

passport.redirectIfCustomerNotLoggedIn = (route) =>
  (req, res, next) => (req.customer ? next() : res.redirect(route));


passport.redirectIfManagerLoggedIn = (route) =>
  (req, res, next) => (req.manager ? res.redirect(route) : next());

passport.redirectIfManagerNotLoggedIn = (route) =>
  (req, res, next) => (req.manager ? next() : res.redirect(route));


passport.redirectIfCookLoggedIn = (route) =>
  (req, res, next) => (req.cook ? res.redirect(route) : next());

passport.redirectIfCookNotLoggedIn = (route) =>
  (req, res, next) => (req.cook ? next() : res.redirect(route));


passport.redirectIfDelivererLoggedIn = (route) =>
  (req, res, next) => (req.deliverer ? res.redirect(route) : next());

passport.redirectIfDelivererNotLoggedIn = (route) =>
  (req, res, next) => (req.deliverer ? next() : res.redirect(route));

module.exports = passport;