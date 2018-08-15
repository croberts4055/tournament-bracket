var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tournamentSchema = new Schema({
    _id : Schema.ObjectId,
    title : String,
    info : String,
    startDate : String,
    game: String,
    endDate: String,
    type: String,
    format: String,
    rounds: Number,
    participants: {type: Array, "default" : [] }
});

module.exports = mongoose.model('Tournament', tournamentSchema);