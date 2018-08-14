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
      
      // if(user.locked){
      //   return done(null,false,{message:'This account is currently unregistered. If you are a student, check your confirmation e-mail.'})
      // }
      
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

})


router.get('/verify/:token', function(req,res){
  if(req.params.token){
    var _token = req.params.token.slice(req.params.token.indexOf("=")+1);
  }
  
  User.findOne({token : _token},function(err,user){
    if(err){console.log(err);}
    else if(!user){
      return;
    }
    else if(user.token === _token){
      User.findOneAndUpdate({token : _token},{locked: false},function(err,resp){
        if(err){
          console.log(err);
        }
      })
    }
  })
  .then( result => {
    res.status(200).json({
      success_message: "Congratulations! Your account has been successfully verified."
    });
  })
  .catch(err => {
    res.status(200).json({
      err_message: err
    })
  })
});

//Get info by userId you FEEL me
router.get('/:userId');

/********************* POST requests ******************************/ 
router.post('/signup',function(req,res){
  var emailregularexpression  = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  var passwordregularexpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
  var usernameregularexpression = /^[a-zA-Z0-9]+$/;
  var nameregularexpression = /^[a-zA-Z ]+$/;

  if(!emailregularexpression.test(req.body.email)){
    res.status(200).json({
      message: "That's an invalid e-mail. Please use a fully qualified e-mail address!",
    })
    return;
  }
  else if(!passwordregularexpression.test(req.body.password)){
    res.status(200).json({
      message: "Your password must have at least one number, one lowercase letter, and one uppercase letter. It must be at least 6 character long. No special characters.",
    })
    return;    
  }
  else if(!usernameregularexpression.test(req.body.username)){
    res.status(200).json({
      message: "That's an invalid username. Please use numbers and letters only!",
    })
    return;    
  }
  else if(!nameregularexpression.test(req.body.name)){
    res.status(200).json({
      message: "That's an invalid name. Please use letters only!",
    })
    return;    
  }
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
      success_message: "Settings have been successfully updated!"
    });
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({
      fail_message: "Failed to Update Data."
    })
  })


})


module.exports = router;