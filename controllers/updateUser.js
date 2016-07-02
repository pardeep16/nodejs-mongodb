var database=require('../models/insertuser.js');
var User=require('../models/user_model.js');

exports.updateById=function (req,res,next) {
	// body...
	var flag=false;
	console.log(req.params.id);
	User.findById(req.params.id,function(err,user){
		if(user==null){
			res.status(400).json({response:"not found"});
		}
		else{
			
			User.find({email:req.body.email},function (err,userdata) {
				// body...
				userdata.forEach(function (userexist) {
					// body...
					if(userexist.email==req.body.email){
						console.log("true");
						flag=true;
						
					}
				});
				if(flag==true){
			    res.status(400).json({response:"Email have someone already exist"});
			    } 
			    else{
				
		    user.name=req.body.username;
			user.password=req.body.userPassword;
			user.email=req.body.email;
			user.phone=req.body.mobile;
			user.save(function(err,user){
				if(err){
					console.log(err);
				}
				else{
					//res.redirect('/users/getUsers');
					res.status(200).json({response:"details saved successfully"});
				}
			});

			}
			});
			
			
			
		}
	});
}
exports.update=function (req,res,next) {
	// body...
	console.log(req.params.id);
	User.findById(req.params.id,function(err,user){
		if(user==null){
			res.status(400).json({response:"not found"});
		}
		else{
			res.render('updateview',{
				name:user.name,
				password:user.password,
				email:user.email,
				mobile:user.phone,
				user_id:user._id
			});
		}
	});
}