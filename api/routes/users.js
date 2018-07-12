const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

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

//Get info by userId you FEEL me
router.get('/:userId');

// Get acc info based on user and pass provided by login form
router.get('/login/:username/:password',function(req,res){
  User.find({username: req.params.username},function(err,item){
    if(err) console.log(err);
    if(item){
      bcrypt.compare(req.params.password,item.password,function(err,match){
        if(match===true){
          var id = item._id;
        }
       // currently no check for how many incorrect attempts 
      })
    }
    else return;
  })
  .exec()
  .then(result=> {
    res.status(200).json({
      message: "Success! Account has been properly found."
    });
  })
  .catch(err => {
    res.status(500).json({
      message: "Incorrect username or password."
    })
  })
})

/********************* POST requests ******************************/ 
router.post('/',function(req,res){
  // check if there's already an email OR username that exists
  User.find( {$or: [{email: req.body.email},{username:req.body.username}]},
    function(err,matches){
    if(err) console.log(err);
    // if there are any matches...
    if(matches.length){
      // send a 400 response (bad request)
      res.status(400).json({
        error: "A user with this email or username already exists."
      })
      // exit the function. 
      return;
    }
    // otherwise, create the user's account with some password encryption. 
    // use updateOps to also create a user possibly?? 
    else {
      bcrypt.hash(req.body.password, SALT_ROUNDS, function(err,hash){
         if(err) console.log("error");
            const user = new User({
                      _id: new mongoose.Types.ObjectId(),
                      locked : req.body.locked,
                      email: req.body.email,
                      username: req.body.username,
                      password: hash,
                      type: req.body.type,
                      subtype: req.body.subtype,
                      name: req.body.name
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
            })  
        }
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