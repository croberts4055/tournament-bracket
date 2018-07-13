/** Imports/Requires */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');
const matchRouter = require('./api/routes/matches');
const schoolRouter = require('./api/routes/schools');
const articlesRouter = require('./api/routes/articles');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');

const app = express();

//Set up mongoose connection
// const mongoDB = 'mongodb://egftest:testingegf5@ds117701.mlab.com:17701/egf_tournament_test';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('port', process.env.PORT || 3001);

// load all model files 
fs.readdirSync(__dirname + '/api' + '/models').forEach(function(filename) {
  if(~filename.indexOf('.js')) require(__dirname + '/api'+ '/models' + '/' + filename); 
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
app.use('/articles',articlesRouter);
app.use('/matches',matchRouter);
app.use('/schools',schoolRouter);


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

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

app.use(passport.initialize());
app.use(passport.session());



module.exports = app;
