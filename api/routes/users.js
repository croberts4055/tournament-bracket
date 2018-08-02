const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;


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
User.remove({},function(err){
   if(err) console.log(err);
 })

********* Set up passport local strategy. *****/ 

passport.use(new LocalStrategy(
  function(username,password,done){
    User.findOne({username: username},function(err,user){
      if(err) {return done(err);}
      if(!user){
        return done(null, false, {message: 'Incorrect username.'});
      }
      
      if(user.locked){
        return done(null,false,{message:'This account is currently unregistered. If you are a student, check your confirmation e-mail.'})
      }
      
      User.comparePassword(password,user.password,function(err,match){
        if(err) throw err;
        if(match){
          return done(null,user);
        }
        else {
          return done(null,false,{message:'Invalid password'});
        }
      })
    })
  }
))

/******************************  API CALLS  ************************************************************/  
/*********************************************************************************************/  

// Display all users in the database - get from database 
// Chain exec(), then(), catch (). Asynchronous calls, each require 
// a callback.
router.get('/',function(req,res,next){
  User.find(function(err,users){
    res.send(users);
  })
  
})

router.get('/auth',function(req, res, next){
  if(req.user){
    res.json({
      user: req.user
    })
  }
  else res.status(200).json({
    message: 'no user currently logged in'
  })
});

router.get('/auth/logout',function(req,res){
  req.logout();
  res.json({
    message: 'You have been logged out.'
  });
  // req.flash('success_msg', 'You have been logged out.');
})


router.get('/auth/:permalink/:token', function(req,res){
  var _permalink = req.params.permalink;
  var _token = req.params.token;

  User.findOne({permalink : _permalink},function(err,user){
    if(user.token === _token){
      console.log('token is correct');
      User.findOneAndUpdate({permalink : _permalink},{locked: false},function(err,resp){
        if(err){
          console.log(err);
        }
        else console.log("user has been verified!");
      })
    }
  })
});

//Get info by userId you FEEL me
router.get('/:userId');

/********************* POST requests ******************************/ 
router.post('/signup',function(req,res){
  // check if there's already an email OR username that exists
  User.find( {$or: [{email: req.body.email},{username:req.body.username}]},
    function(err,matches){
    if(err) console.log(err);
    // if there are any matches...
    if(matches.length){
      // send a 400 response (bad request)
      res.status(200).json({
        message: 'A user with this email/username already exists.'
      })
      // alert("A user with this email/username already exists.");
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
                      token : req.body.token,
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
                // console.log(result);
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

router.post('/login',passport.authenticate('local'), function(req,res){
  res.end();
});

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Delete operations

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

// router.patch('/:userId',(req,res,next)=>{
//   const id = req.params.userId;
//   // looping over req.body, dynamically storing all props
//   /**
//    *  EXPECTS A REQ.BODY IN THE FORM OF : 
//    *  [
//    *    {"propName:" prop, "value": val}
//    *   ]
//    */
//   const updateOps = {};
//   for(const ops of req.body){
//     updateOps[ops.propName] = ops.value;
//   }
//   // need to use $set to pass object you want to update it to
//   User.update( {_id: id}, {$set: updateOps})
//   .exec()
//   .then( result => {
//     console.log(result);
//     res.status(200).json(result);
//   })
//   .catch( err => {
//     console.log(err);
//     res.status(500).json({
//       message: "failed to update data."
//     })
//   })
// })

router.patch('/auth',(req,res,next)=>{
  if(!req.user){
    res.status(401);
  }
  console.log(req.user._id);
  const id = req.user.id;
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
    res.status(200).json({
      message: "Settings have been successfully updated!"
    });
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({
      message: "Failed to Update Data."
    })
  })


})


module.exports = router;