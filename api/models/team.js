const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamSchema = new Schema({
    _id: Schema.ObjectId,
    division: {type: String, enum: ['Highschool','College']},
    upcoming_matches: {type: Array, "default": []},
    players: {type: Array, "default": []},
    logo: {type: String},
    game: {type: String},
    school: {type: String},
    state: {type: String},
    sections: {type: String}
  });

  module.exports = mongoose.model('Teams',teamSchema);