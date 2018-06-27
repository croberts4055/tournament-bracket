const express = require('express');
const router = express.Router();
const Schools = require('../models/schools');


router.get('/',function(req,res){
    res.send('schools');
});

module.exports = router;