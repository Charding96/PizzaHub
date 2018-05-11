const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');
const viewHelpers = require('./middlewares/viewHelpers');
const passport = require('./middlewares/authentication');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
}));


app.use(expressSession({secret: 'sweet Pizza', resave: false, saveUninitialized: true}));
app.use(flash());
app.use((req, res, next) => {
	res.locals.messages = require('express-messages')(req, res);
	next();
});

app.use(passport.initialize());
app.use(passport.session());
app.use(viewHelpers.register());





app.use(express.static('./public'));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);




// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });


  module.exports = {app};
