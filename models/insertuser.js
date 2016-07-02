var mongoose=require('mongoose');
var User=require('./user_model.js');
var database=require('./db.js');

exports.InsertSingle=function (data,callback) {
	// body...
	var new_user=new User({
		name:data.name,
		password:data.password,
		email:data.email,
		phone:data.mobile
	});
	new_user.save(function(err){
		if(err){
			callback(err,null);
		}
		else{
			callback(err,{login:true,msg:"use added successfully !"});
		}
	})

}