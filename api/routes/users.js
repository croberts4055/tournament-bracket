const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Schema = mongoose.Schema;



/** Test models to see if our data shows up!
// var myModel = mongoose.model('accounts',accountsSchema);

modelInstance = new myModel({ email: "test@aol.com",username: "adt624",
year:2020, school: "si tech",ign:"arod",gender: {male: true, female: false}});

modelInstance.save(function(err){
  if(err) return handleError(err);
});

myModel.findByIdAndRemove(1,(function(err){
  if(err) console.log("error");
}));

Clear database 
myModel.remove({}, function(err){
  if(err) return console.log("error");
});

myModel.create({id: 1,email:"aron@gmail.com"}, function(err, modelInstance){
 if (err) return handleError(err);
});

mongoose.model('users',{name: String});

*/ 

/******************************  API CALLS  ************************************************************/  
/*********************************************************************************************/  

// Display all users in the database - get from database 
// Chain exec(), then(), catch (). Asynchronous calls, each require 
// a callback.
router.get('/',function(req, res){
  User.find(function(err,users){
    res.send(users);
  });
 
});

// Adding to database -- 
router.post('/',function(req,res){
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
    res.status(200).json(result);
    console.log(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })

});


// Delete operations from DB 

router.delete('/:userId',(req,res,next)=>{
  const id = req.params.userId;
  User.remove({ _id: id})
  .exec()
  .then( result => {
    res.status(200).json(result);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  })
})

// Update from DB 

router.patch('/:userId',(req,res,next)=>{
  const id = req.params.userId;
  // looping over req.body, dynamically storing all props
  /**
   *  EXPECTS A REQ.BODY IN THE FORM OF : 
   *  [
   *    {"propName:" prop, "value": val}
   *   ]
   */
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  // need to use $set to pass object you want to update it to
  User.update( {_id: id}, {$set: updateOps})
  .exec()
  .then( result => {
    console.log(result);
    res.status(200).json(result);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({
      message: "failed to update data."
    })
  })
})


module.exports = router;