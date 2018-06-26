const express = require('express');
const router = express.Router();
const Matches = require('../models/match');

router.get('/',function(req,res){
    res.send('matches');
});

module.exports = router;