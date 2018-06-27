const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Articles = require('../models/articles');


// Read operations
router.get('/',function(req,res){
    Articles.find(function(err,articles){
        if(err) return console.log("error");
        res.send(articles);
    })
});


// Create operations 

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

// Update operations

router.patch('/:articleId',(req,res,next)=>{
    const id = req.params.articleId;
    // Our dynamic property assignment
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Articles.update( {_id: id},{$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "failed to update article data."
        })
    })
})

// Delete operations 

router.delete('/:articleId',(req,res,next)=>{
    const id = req.params.articleId;
    Articles.removeById({_id: id})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(result);
    })
})

module.exports = router;