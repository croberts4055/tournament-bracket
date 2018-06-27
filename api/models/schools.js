const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
    _id : Schema.ObjectId,
    school_name : {type: String},
    type: {type: String, enum: ['Highschool','College']},
    address: String,
    logo: String,
    description: String,
    admins: {type: Array, "default": []},
    country: String,
    state: String,
    cover_img: String,
    articleslink: String
 });

 module.exports = mongoose.model('Schools',schoolSchema);