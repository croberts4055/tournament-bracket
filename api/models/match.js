var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var matchSchema = new Schema({
    _id : Schema.ObjectId,
   team_1 : String,
   team_2 : String,
   team_1wins: Number,
   team_2wins: Number,
   ties: Number,
   winner: String,
   game: String,
   season: String,
   team1link: String,
   team2link: String,
   conferencegame: Boolean,
   screenshots: String,
   summary: String,
   streamed: Boolean,
   casters: {type: Array, "default":[]}
});

module.exports = mongoose.model('Matches', matchSchema);