const express = require('express');
const router = express.Router();
const Schools = require('../models/schools');
const mongoose = require('mongoose');

// Read operations 
router.get('/',function(req,res){
    Schools.find(function(err,schools){
        if(err) console.log(err);
        res.send(schools);
    })
});

//Add new data to the schools

router.post('/',function(req,res){
    const school = new Schools({
        _id : new mongoose.Types.ObjectId(),
        school_name: req.body.school_name,
        type: req.body.type,
        address: req.body.address,
        logo: req.body.logo,
        description: req.body.description,
        admins: req.body.admins,
        country: req.body.country,
        state: req.body.state,
        cover_img: req.body.cover_img,
        articleslink: req.body.articleslink
    })
    school
    .save()
    .then( result => {
        console.log(result);
        res.status(200).json({
            message: "success!"
        })
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Update operations

router.patch('/:schoolId',(req,res,next)=>{
    const id = req.params.schoolId;
    // Our dynamic property assignment
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Schools.update( {_id: id},{$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "failed to update school data."
        })
    })
})

// Delete operations 

router.delete('/:schoolId',(req,res,next)=>{
    const id = req.params.schoolId;
    Schools.removeById({_id: id})
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