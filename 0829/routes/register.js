var express = require('express');
var router = express.Router();
var conn = require('../coon');
var insert = conn.insert;
router.get('/',function(req,res,next){
    res.render('register',{title:'Express'})
});
router.post('/',function(req,res,next){
    insert('qwer',function(data){
        res.send(data);
    },{'userName':req.body.uName,'userPassword':req.body.uPwd});
})

module.exports = router;