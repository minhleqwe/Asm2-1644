var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customerRouter = require('./routes/customer');
var loginRouter = require('./routes/login');
var robotRouter = require('./routes/robot');
var toyRouter = require('./routes/toy');
var figureRouter = require('./routes/figure');

var app = express();


var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));
hbs.registerHelper('equal', require('handlebars-helper-equal'))


var mongoose = require("mongoose");
var uri = "mongodb+srv://minhlqgch211344:1q2w3e4r@minh.eafg6qj.mongodb.net/Asm";
mongoose.connect(uri)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer', customerRouter);
app.use('/login', loginRouter);
app.use('/toy', toyRouter);
app.use('/figure', figureRouter);
app.use('/robot', robotRouter);
app.listen (process.env.PORT || 3001);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
