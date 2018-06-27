const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    _id : Schema.ObjectId,
    title : String,
    images: String,
    articletext: String,
    schoollink: String,
    author: String,
    publication_date: String,
    tags: {type: Array, "default": []}
 });

 module.exports = mongoose.model('Articles',articleSchema);