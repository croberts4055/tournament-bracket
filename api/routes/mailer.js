const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aarondtaveras@gmail.com',
        pass: 'adt62497'
    }
})

  router.post('/',function(req,res){
    var mailOptions = {
        from: 'aarondtaveras@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
    }
    
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
            res.status(500).json({
                message: 'Could not send mail.'
            })
        }
        else {
           res.status(200);
           console.log('Email sent!')
        }
    })
  
  });
  
  module.exports = router;