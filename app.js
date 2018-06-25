var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('port', process.env.PORT || 3001);


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


/** Setting up a schema - how our tables should look. According to schema outlined in spreadsheet, the following : 
 *  | ACCOUNTS     | SCHOOL PROFILE       |    MATCHES     |     ARTICLES     |        TEAM        |
 *  |--------------|----------------------|----------------|------------------|--------------------|
 *  | ID           |  ID                  | ID             |    ID            |       ID           | 
 *  | EMAIL        |  SCHOOL NAME         | TEAM 1         |    TITLE         |       DIVSION      | 

    More to follow, basic structure as of now. 

 */ 


var accountsSchema = new Schema({
   id : 0,
   email : "" 
}); 

var schoolSchema = new Schema({
    id : 0,
    school_name : ""
});

var matchSchema = new Schema({
    id : 0,
    team_1 : "",
    team_2 : ""
});

var articleSchema = new Schema({
    id : 0,
    title : ""
});

var myModel = mongoose.model('accounts',accountsSchema);

modelInstance = new myModel({id: 1, email: "test@aol.com"});

myModel.create({id: 1,email:"aron@gmail.com"}, function(err, modelInstance){
  if (err) return handleError(err);
});

app.get('/users',function(req, res){
  console.log(modelInstance.id);
});

app.get('/',function(req,res){
  res.send("ok");
});

// app.get(usersRouter, function(req,res){
//   res.send("test");
// });

module.exports = app;
