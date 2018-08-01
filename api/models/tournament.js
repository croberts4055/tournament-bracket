var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tournamentSchema = new Schema({
    _id : Schema.ObjectId,
    title : String,
    game: String,
    expiration: Number,
    format: {
        singleElim: {type: Boolean, required: true, "default": false},
        roundRobin: {type: Boolean, required: true, "default": false}
    },
    rounds: Number,
    participants: Array
});

module.exports = mongoose.model('Tournament', tournamentSchema);