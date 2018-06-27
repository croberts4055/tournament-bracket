const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Articles = require('../models/articles');

router.get('/',function(req,res){
    Articles.find(function(err,articles){
        if(err) return console.log("error");
        res.send(articles);
    })
});

router.post('/add',function(req,res){
    const article = new Articles({
        _id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        images: req.body.images,
        articletext: req.body.articletext,
        schoollink: req.body.schoollink,
        author: req.body.author,
        publication_date: req.body.publication_date,
        tags: req.body.tags
    });
    article
    .save()
    .then( result => {
        console.log(result);
    })
});

module.exports = router;