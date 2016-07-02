var express = require('express');
var router = express.Router();
var usrCtrl=require('./../controllers/newUser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Welcome !' });
});
router.get('/add',function(req,res,next){
	res.render('addview');
	next();
});
router.post('/add',function(req,res,next){


	
	var name=req.body.username;
	var password=req.body.userPassword;
	var emailId=req.body.email;
	var phone=req.body.mobile;

	if(!(name=="") && !(password=="") && !(emailId=="") && !(phone=="")){
		var chk=verifyUserEmail(emailId);
		var phn=verifyPhoneNumber(phone);
		if(chk && phn){
			usrCtrl.addNewData;
		}
		else{
			if(!chk){
				res.status(400).json({response:"Email address not correct"});
			}
			else{
				res.status(400).json({response:"Please enter correct phone number"});
			}

		}
	}
	else{
		console.log("invalid ");
		res.status(400).json({response:"Details are not cpmpletely filled"});	
	}
	//console.log("name :"+name+"\n"+"password :"+password+"\n "+"email :"+emailId+"\n"+"phone :"+phone);
});

function verifyUserEmail(emailid){
var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
if(pattern.test(emailid)){
	return true;
}
else{
	return false;
}
}
function verifyPhoneNumber(number) {
	// body...
	if(number.length==10){
		return true;
	}
	else{
		return false;
	}
}

module.exports = router;
