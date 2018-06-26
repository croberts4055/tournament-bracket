var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var matchSchema = new Schema({
   team_1 : "",
   team_2 : "",
   team_1wins: 0,
   team_2wins: 0,
   ties: 0,
   winner: "",
   game: "",
   season: "",
   team1link: "",
   team2link: "",
   conferencegame: false,
   screenshots: "",
   summary: "",
   streamed: false,
   casters: ""
});

module.exports = mongoose.model('Matches', matchSchema);