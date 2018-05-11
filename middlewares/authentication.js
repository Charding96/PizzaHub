const bcrypt = require('bcrypt-nodejs');
//Anthentication middleware for Node.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Customer = require('../models').Customers;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({ usernameField: 'username',}, (username, password, done) => {
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

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.customer ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.customer ? next() : res.redirect(route));

module.exports = passport;