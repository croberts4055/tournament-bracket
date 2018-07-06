const express = require('express');
const mongoose = require('mongoose');
const Teams = require('../models/team');
const router = express.router();

// Read operations 
// Chain exec(), then(), catch (). Asynchronous calls, each require 
// a callback.
router.get('/',function(req, res){
    Teams.find(function(err,teams){
      res.send(teams);
    });
  });
  
  // Create operations  -- 
  router.post('/',function(req,res){
    const team = new Teams({
      _id: new mongoose.Types.ObjectId(),
      division: req.body.division,
      upcoming_matches: req.body.matches,
      players: req.body.players,
      logo: req.body.logo,
      game: req.body.game,
      school: req.body.school,
      conference: req.body.conference,
      region: req.body.region
    });
  
    team
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
  
  router.delete('/:teamId',(req,res,next)=>{
    const id = req.params.teamId;
    Teams.remove({ _id: id})
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
  
  router.patch('/:teamId',(req,res,next)=>{
    const id = req.params.teamId;
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
    Teams.update( {_id: id}, {$set: updateOps})
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