const express = require('express');
const router = express.Router();
const Matches = require('../models/articles');

router.get('/',function(req,res){
    res.send('articles');
});

module.exports = router;