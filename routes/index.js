

var express = require('express');
var router = express.Router();

var User = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "WeiTing Home" });
});

router.get('/users', function(req, res, next) {
    res.json({
        users:users
    });
});

router.get('/user/:userid', function(req, res, next) {
  var userid = req.params["userid"];

  if (User['userid']){
	return next();
  }else{
	return res.json({
		status:"user is not exited"
      });
  }
});

router.get('/user', function(req, res, next) {
	var user = req.body;
	if(!user.name||user.name == ""){
		return res.json({
        user:User[user.name]
   })}
});
module.exports = router;
