var database=require('../models/insertuser.js');
var User=require('../models/user_model.js');

exports.addNewData=function(req,res,next){
	var userName=req.body.username;
	var passwordUser=req.body.userPassword;
	var emailid=req.body.email;
	var phone=req.body.mobile;
	var data={
		name:userName,
		password:passwordUser,
		email :emailid,
		mobile : phone
	};
	var flag=false;

	if(!(userName=="") && !(passwordUser=="") && !(emailid=="") && !(phone=="")){
		var chk=verifyUserEmail(emailid);
		var phn=verifyPhoneNumber(phone);
		if(chk && phn){
			User.find({email:emailid},function(err,userdata){
				/*console.log("user");
				console.log(userdata);
				console.log(userdata.name);*/
				/*if(userdata.name==(userName)){
					res.status(400).json({result:"user already exist Try Again!"});

				}*/
				userdata.forEach(function(user){
					if(user.email==emailid){
						//console.log("true");
						//console.log(user.name);
						flag=true;
						return;
					}
				});
				console.log(flag);
				if(flag){
					res.status(400).json({result:"User already exist Try Again !"});
				}
				else{
					database.InsertSingle(data,function(err,result){
				if(err){
					res.send(err);
				}
				else{
					res.send(result);
				}
				});
				}
			});
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
	
	

			
			
			

}
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