var database=require('../models/insertuser.js');
var User=require('../models/user_model.js');

exports.deleteById=function (req,res,next) {
	// body...
	console.log(req.params.id);
	User.findById(req.params.id,function(err,user){
		if(user==null){
			res.status(400).json({response:"not found"});
		}
		else{
			user.remove(function(err,user){
				if(err){
					console.log(err);
				}
				else{
					//res.redirect('/users/getUsers');
					res.status(200).json({response:"user remove successfully"});
				}
			});
		}
	});
}