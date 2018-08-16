const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const nodemailer = require('nodemailer');
const Validate = require('../validation/validation.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aarondtaveras@gmail.com',
        pass: 'adt62497'
    }
})

  router.post('/contact',function(req,res){
    console.log(req.body)

      var validationTest = [
          Validate.checkEmail(req.body.email)
      ]

      for(var i = 0; i < validationTest.length; i++){
          if(validationTest[i].error){
              res.status(400).json({
                  message: validationTest[i].message
              })
              return;
          }
      }

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
    var url;
    req.body.token ? url = "http://localhost:3000/verified/token=" + req.body.token : url = "http://localhost:3000/verified/";
    var mailOptions = {
        from: 'aarondtaveras@gmail.com',
        to: req.body.email,
        subject: "Your EGF Confirmation E-mail!",
        text: "Here is your confirmation token! ",
        html: `<h3>Welcome to the family.</h3> <br></br> <a href=${url}>Click here to verify your account and get started.</a>`
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