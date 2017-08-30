var express = require('express');
var router = express.Router();
var conn = require('../coon');
var find = conn.find;
router.get('/',function(req,res,next){
    res.render('index',{title:'Express'})
});
router.post('/',function(req,res,next){
    find('qwer',function(data){
        res.send(data);
    },{'userName':req.body.uName,'userPassword':req.body.uPwd});
})


// var data = {userName:'admin',userPwd:'123'};
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express',name:'xixixi' });
// });
// router.post('/',function(req,res,next){
//     if(data.userName==req.body.userName && data.userPwd==req.body.userPwd){
//       res.send('ok');
//     }else{
//       res.send('error');
//     }
// });
module.exports = router;
