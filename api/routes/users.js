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
router.get('/',function(req, res){
  User.find(function(err,users){
    res.send(users);
  });
 console.log(req.user);
 console.log(req.session);
  // if(req.session.passport.user){
  //   console.log(req.session.passport.user);
  //   res.send(req.user);
  // }
});

router.get('/logout',function(req,res){
  req.logout();
  console.log(req.user);
  
  // req.flash('success_msg', 'You have been logged out.');
})

//Get info by userId you FEEL me
router.get('/:userId');




// Get acc info based on user and pass provided by login form
// router.get('/login/:username/:password',function(req,res){
//   User.find({username: req.params.username},function(err,item){
//     if(err) console.log(err);
//     if(item){
//       bcrypt.compare(req.params.password,item.password,function(err,match){
//         if(match===true){
//           var id = item._id;
//         }
//        // currently no check for how many incorrect attempts 
//        // check for valid email 
//       })
//     }
//     else return;
//   })
//   .exec()
//   .then(result=> {
//     res.status(200).json({
//       message: "Success! Account has been found."
//     });
//   })
//   .catch(err => {
//     res.status(500).json({
//       message: "Incorrect username or password."
//     })
//   })
// })

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
                      email: req.body.email,
                      username: req.body.username,
                      password: hash,
                      type: req.body.type,
                      subtype: req.body.subtype,
                      name: req.body.name
                    })
              req.login(user,function(err){
                if(err) {return next(err);}
              })
              passport.authenticate('local');             
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

router.post('/login',passport.authenticate('local'), function(req,res){
  console.log(req.user);
  console.log(req.isAuthenticated());
  console.log(req.session);
  
});

passport.serializeUser(function(user, done) {
  console.log("user with id " + user._id + " serialized");
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  console.log("deserializing user with id " + id + " ");
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