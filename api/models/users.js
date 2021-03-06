const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
    _id : Schema.Types.ObjectId,
    locked : {type: Boolean, required: true},
    token : {type: String, required: true},
    isDeleted: {type: Boolean},
    email : {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true },
    type: { 
            student: {type:Boolean,required:true,default:false},
            admin: {type: Boolean, required:true,default: false}
            
          },  
    subtype: {
      highschool: {type:Boolean, required: true, default: false},
      college: {type: Boolean, required: true, default:false},
      media: {type: Boolean, required: true, default: false},
      fan: {type:Boolean, required: true, default: false},
      schooladmin: {type:Boolean, required: true, default: false},
      captain: {type:Boolean, required: true, default: false}
    },
    city: {type: String},
    state: {type: String, enum: [
      'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID',
      'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS',
      'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
      'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
      'WI','WY'
    ]},
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
    name: {type: String, required: true},
    ign: {type: String},
    gender: {type: String, enum: ['Male','Female']},
    dob: {type: String }

  }); 
  
  module.exports = mongoose.model('Users',userSchema);

  module.exports.encryptPassword = function(toHash, salt, callback){
    bcrypt.hash(toHash, salt, function(err,hash){
      if(err) console.log(err); 
      callback(null,hash);
    })
  }

  module.exports.comparePassword = function(toTest, hash, callback){
    bcrypt.compare(toTest,hash,function(err,match){
      if(err) throw err;
      callback(null,match);
    })
  }


  // bcrypt.hash(req.body.password, SALT_ROUNDS, function(err,hash){
  //   if(err) console.log("error");
  //      const user = new User({
  //                _id: new mongoose.Types.ObjectId(),
  //                locked : req.body.locked,
  //                token : req.body.token,
  //                email: req.body.email,
  //                username: req.body.username,
  //                password: hash,
  //                type: req.body.type,
  //                subtype: req.body.subtype,
  //                name: req.body.name
  //              })
  //        user
  //        .save()