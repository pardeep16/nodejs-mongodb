var database=require('../models/insertuser.js');
var User=require('../models/user_model.js');

exports.getAll=function (req,res,next) {
	// body...
	User.find({},function(err,users){

		if(users.length==0){
			res.status(400).json({response:"No user find"});
			
		}
		else{
			res.render('getusers',{
					"users" :users
			});
			
		}

	});
	//res.send(users);
}