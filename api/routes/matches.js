const express = require('express');
const router = express.Router();
const Matches = require('../models/match');
const mongoose = require('mongoose');

router.get('/',function(req,res){
    Matches.find(function(err,matches){
        if(err) return console.log("error");
        res.send(matches);
    })
});

// could use router.get to get by an id of the item which we want

router.post('/add',function(req,res){
    match = new Matches({
        _id : new mongoose.Types.ObjectId(),
        team_1 : req.body.team_1,
        team_2 : req.body.team_2,
        team_1wins: req.body.team_1wins,
        team_2wins: req.body.team_2wins,
        ties: req.body.ties,
        winner: req.body.winner,
        game: req.body.game,
        season: req.body.season,
        team1link: req.body.team1link,
        team2link: req.body.team2link,
        conferencegame: req.body.conferencegame,
        screenshots: req.body.screenshots,
        summary: req.body.summary,
        streamed: req.body.streamed,
        casters: req.body.casters
    })
    match
    .save()
    .then( result => {
        res.send(result);
    })
})

// Update operations

router.patch('/:matchId',(req,res,next)=>{
    const id = req.params.matchId;
    // Our dynamic property assignment
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Matches.update( {_id: id},{$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "failed to update match data."
        })
    })
})

// Delete operations 

router.delete('/:matchId',(req,res,next)=>{
    const id = req.params.matchId;
    Matches.removeById({_id: id})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(result);
    })
})

module.exports = router;