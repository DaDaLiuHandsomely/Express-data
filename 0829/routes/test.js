var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: '321' });
});
// router.post('/', function(req, res, next) {
//   // res 服务器的响应
     
   
// });
module.exports = router;
