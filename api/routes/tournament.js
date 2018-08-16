const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    Schema = mongoose.Schema,
    Tournament = require('../models/tournament'),
    Validate = require('../validation/validation.js');

router.get('/',function(req,res){
    Tournament.find({},function(err,tournaments){
        if(err) {
            res.status(404); 
            console.log(err);
        }
        else {
            res.send(tournaments);
        }
    })
    // Tournament.remove({},function(err){
    //     if(err) console.log(err);
    //   })
})

router.get('/:id',function(req,res){
    var id = req.params.id;
    Tournament.findOne({_id : id},function(err,tournament){
        if(err) {
            res.status(404); 
            console.log(err);
        }
        else {
            res.send(tournament);
        }
    })
})

router.post('/create',function(req,res){

    if(!req.body.title || !req.body.info || !req.body.startDate || !req.body.endDate || !req.body.game || !req.body.rounds){
        res.status(400).json({
            message: 'Please fill in all fields.'
        })
        return;
    }

    // **************************************************************
    // **************************************************************
    // ************************** TO DO *****************************
    //
    // data from.... INFO, GAME, PARTICIPANTS... is NOT validatied!!!
    //
    // **************************************************************
    // **************************************************************
    // **************************************************************

    var validationTest = [
        Validate.checkTitle(req.body.title),
        Validate.checkRounds(req.body.rounds),
        Validate.checkFormType(req.body.type),
        Validate.checkStartEndDate(req.body.startDate, req.body.endDate)
    ]

    for(var i = 0; i < validationTest.length; i++){
        if(validationTest[i].error){
            res.status(400).json({
                message: validationTest[i].message
            })
            return;
        }
    }

    Tournament.find({title: req.body.title},function(err,match){
        if(err) console.log(err);
        if(match.length){
            res.status(400).json({
                message: 'A tournament with this title already exists.'
            })
            return;
        }
        else {
            const Tourney = new Tournament({
                _id : new mongoose.Types.ObjectId(),
                type: req.body.type,
                title: req.body.title,
                info: req.body.info,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                game: req.body.game,
                format: req.body.format,
                rounds: req.body.rounds,
                participants: req.body.participants
            })
            Tourney.save().then(result=> {
                res.status(200);//.json(result);
                console.log(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500);
            })
        }
    })
});

module.exports = router;