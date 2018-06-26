const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : "",
    images: "",
    articletext: "",
    schoollink: "",
    author: "",
    publication_date: "",
    tags: ""
 });

 module.exports = mongoose.model('Article',articleSchema);