const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var teamSchema = new Schema({
    division: {v:false, jv: false},
    players: "",
    logo: "",
    game: "",
    school: "",
    conference: "",
    region: ""
  });

  module.exports = mongoose.model('Teams',teamSchema);