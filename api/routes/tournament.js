const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    Schema = mongoose.Schema,
    Tournament = require('../models/tournament');

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
    var titleregularexpression = /^[a-zA-Z0-9 ]*$/;
    // NEED TO ADD IF (!REQ.BODY.PARTICIPANTS) BACK IN AFTER!
    if(!req.body.title || !req.body.info || !req.body.startDate || !req.body.endDate || !req.body.game || !req.body.rounds || !req.body.type){
        res.status(400).json({
            message: 'Please fill in all fields.'
        })
        return;
    }
    else if(!titleregularexpression.test(req.body.title)){
        res.status(400).json({
            message: 'Title can only contain numbers and letters.'
        })
        return;
    }
    else if(req.body.rounds < 2 || req.body.rounds > 16 ){
        res.status(400).json({
            message: 'The number of rounds should be between 2 and 16.'
        })
        return;
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