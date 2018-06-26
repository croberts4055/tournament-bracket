/** Imports/Requires */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fs = require('fs');

var app = express();

//Set up mongoose connection
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://egftest:testingegf5@ds117701.mlab.com:17701/egf_tournament_test';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('port', process.env.PORT || 3001);

// load all model files 
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if(~filename.indexOf('.js')) require(__dirname + '/models' + '/' + filename); 
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

if('development' === app.get('env')){
  mongoose.connect('mongodb://localhost/test')
}


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
