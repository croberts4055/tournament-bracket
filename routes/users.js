const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Schema = mongoose.Schema;

/*********************************************************************************************/  
/*********************************************************************************************/  

/** Test models to see if our data shows up!  */
// var myModel = mongoose.model('accounts',accountsSchema);

// modelInstance = new myModel({ email: "test@aol.com",username: "adt624",
// year:2020, school: "si tech",ign:"arod",gender: {male: true, female: false}});

// modelInstance.save(function(err){
//   if(err) return handleError(err);
// });

// myModel.findByIdAndRemove(1,(function(err){
//   if(err) console.log("error");
// }));

// Clear database 
// myModel.remove({}, function(err){
//   if(err) return console.log("error");
// });

// myModel.create({id: 1,email:"aron@gmail.com"}, function(err, modelInstance){
//  if (err) return handleError(err);
// });

// mongoose.model('users',{name: String});

/******************************  ROUTING FUNCTIONS  ************************************************************/  
/*********************************************************************************************/  


router.get('/',function(req, res){
  User.find(function(err,users){
    res.send(users);
  });
 
});

// When a new personal account is created -- 
router.post('/',function(req,res){
  // var instance = new myModel({email: req.body.email, password: req.body.password, username: req.body.password, type: req.body.type});
  // instance.save(function(err){
  //   if(err) return console.log("err");
  // })
  // myModel.create({email: req.body.email, password: req.body.password, username: req.body.password, type: req.body.type}, function(err,modelInstance){
  //   if (err) return console.log("err");
  // })

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    type: req.body.type,
    dob: req.body.dob
  })

  user
  .save()
  .then(result => {
    console.log(result);
  })

});



module.exports = router;