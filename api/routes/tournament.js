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
})


router.post('/create',function(req,res){
    Tournament.find({title: req.body.title},function(err,match){
        if(err) console.log(err);
        if(match.length){
            res.status(200).json({
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
                res.status(200).json(result);
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