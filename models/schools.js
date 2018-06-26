const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
    _id : Schema.ObjectId,
    school_name : "",
    type: {college: false, highschool: false},
    address: "",
    logo: "",
    description: "",
    admins: "",
    country: "",
    state: "",
    cover_img: "",
    articleslink: ""
 });