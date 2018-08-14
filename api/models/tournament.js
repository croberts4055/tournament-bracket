var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tournamentSchema = new Schema({
    _id : Schema.ObjectId,
    title : String,
    info : String,
    startDate : String,
    game: String,
    endDate: String,
    type: {
        season: {type: Boolean, required: true, "default": false},
        state: {type: Boolean, required: true, "default": false},
        national: {type: Boolean, required: true, "default": false},
        invitational: {type: Boolean, required: true, "default": false}
    },
    format: {
        singleElim: {type: Boolean, required: true, "default": false},
        roundRobin: {type: Boolean, required: true, "default": false},
        swiss: {type: Boolean, required: true, "default": false},
        doubleElim: {type: Boolean, required: true, "default": false}
    },
    rounds: Number,
    participants: {type: Array, "default" : [] }
});

module.exports = mongoose.model('Tournament', tournamentSchema);