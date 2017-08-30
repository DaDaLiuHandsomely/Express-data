var express = require('express');
var router = express.Router();
var conn = require('../conn'); 
var find = conn.find;
router.get('/',function(req,res,next){
    res.render('dl',{title:'Express'});
})
router.post('/',function(req,res,next){
    find('login',function(data){
        res.send(data);
    },{'name':req.body.uName,'password':req.body.uPwd})
})
module.exports = router;