var express = require('express');
var router = express.Router();
var conn = require('../getLogin');
var find = conn.find;
router.get('/',function(req,res,next){
  find('login',function(data){
    console.log(data);
    res.render('index',{title:'Express',vals:data})
  })
  
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
