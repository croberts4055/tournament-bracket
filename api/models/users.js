const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : Schema.Types.ObjectId,
    email : {type: String },
    username: {type: String },
    password: {type: String },
    type: {type: String, enum: ['Highschool','College'] },
    subtype: {type: String},
    city: {type: String},
    state: {type: String},
    photo: {type: String},
    bio: {type: String},
    fblink: {type: String},
    twitlink: {type: String},
    twitchlink: {type: String},
    otherlink: {type: String},
    socialinfo: {type: String},
    school: {type: String},
    position: {type: String},
    team: {type: String},
    major: {type: String},
    year:{type: Number},
    name: {type: String},
    ign: {type: String},
    gender: {type: String, enum: ['Male','Female']},
    dob: {type: String }
    // leave out requireds for now
  }); 

  module.exports = mongoose.model('Users',userSchema);