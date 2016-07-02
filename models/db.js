var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/pardeepData",function(err){
	if(err){
		console.log("Database not Connected");
	}
});

var Schema=mongoose.Schema;

exports.insertData=function (data,callback) {
	// body...
	var userSchema=new Schema({
		name:String,
		password:String
	});
	
	//var User =mongoose.model('Users',{name:String,password:String});
	//var User=mongoose.model('User',Users);
	var UserModel=mongoose.model('userSchema',userSchema);
	var name_user=data.user;
	var password_user=data.password;
	var userdata=new UserModel({name:name_user,password:password_user});
	userdata.save(function(err){
		if(err){
			console.log(err);
			callback(err,null);
		}
		else{
			console.log("save");
			callback(null,{"login":true,"message":"Successfully saved"});
		}
	})

}
