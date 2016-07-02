function  validationEmailId(emailAdd){

}
function onFormSubmit(){
	console.log("submit form ");
	var name=document.addUserForm.username;
	var mobileNumber=document.addUserForm.mobile;
	var emailId=document.addUserForm.email;
	alert("name :"+name+"\n"+"mobile :"+mobileNumber+"\n"+"email :"+email);

}
exports.onFormSubmit=onFormSubmit;