/*created by & author: pardeep

*/

var express = require('express');
var router = express.Router();
var authent=require('../auth.js');
var userCtrl=require('./../controllers/newUser');
var getusers=require('./../controllers/getAllUsers');
var deluser=require('./../controllers/deleteuser');
var updUsr=require('./../controllers/updateUser');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUsers',getusers.getAll);
router.post('/newUserSubmit',userCtrl.addNewData);
router.get('/remove/:id',deluser.deleteById);
router.get('/update/:id',updUsr.update);
router.post('/updateUser/user/:id',updUsr.updateById);
	//res.send("UserName :"+userName+"<br>"+"Password :"+passwordUser);
	//res.send("</br>"+"Form Submit");*/
	//res.status(400).json({"user": userName, "password": passwordUser,err: false});
module.exports = router;
