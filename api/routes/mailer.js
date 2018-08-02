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

  router.post('/contact',function(req,res){
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

  router.post('/confirmation',function(req,res){
    var mailOptions = {
        from: 'aarondtaveras@gmail.com',
        to: req.body.email,
        subject: "Your EGF Confirmation E-mail!",
        text: "Here is your confirmation token! " + req.body.token,
        html: '<h3> Welcome to the EGF family! </h3> <a href="http://localhost:3001/users/"' + req.body.token + '> Click here to verify your e-mail! </a>'
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