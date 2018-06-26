var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//   res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "D0loresH4ze"
//   }]);
// });

var accountsSchema = new Schema({
  email : "",
  username: "",
  password: "",
  type: "",
  subtype: "",
  city: "",
  state: "",
  photo: "",
  bio: "",
  fblink: "",
  twitlink: "",
  twitchlink: "",
  otherlink: "",
  socialinfo: "",
  school: "",
  position: "",
  team: "",
  major: "",
  year: 0,
  name: "",
  ign: "",
  gender: {male: false, female: false},
  dob: ""
}); 

// var schoolSchema = new Schema({
//    school_name : ""
// });

// var matchSchema = new Schema({
//    team_1 : "",
//    team_2 : ""
// });

// var articleSchema = new Schema({
//    title : ""
// });

var myModel = mongoose.model('accounts',accountsSchema);

modelInstance = new myModel({ email: "test@aol.com",username: "adt624",
year:2020, school: "si tech",ign:"arod",gender: {male: true, female: false}});

modelInstance.save(function(err){
  if(err) return handleError(err);
});

// myModel.findByIdAndRemove(1,(function(err){
//   if(err) console.log("error");
// }));

myModel.remove({}, function(err){
  if(err) return console.log("error");
});

// myModel.create({id: 1,email:"aron@gmail.com"}, function(err, modelInstance){
//  if (err) return handleError(err);
// });

// mongoose.model('users',{name: String});

router.get('/',function(req, res){
  mongoose.model('accounts').find(function(err,accounts){
    res.send(accounts);
  });
});


module.exports = router;