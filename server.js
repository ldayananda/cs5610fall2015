var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
app.use('assignment', express.static(__dirname + '/public/assignment'));
app.use('assignment/css', express.static(__dirname + '/public/assignment/css'));
app.use('project', express.static(__dirname + '/public/project'));
app.use('project/css', express.static(__dirname + '/public/project/css'));

require("./public/assignment/server/app.js")(app);
// var userModule = require("/assignment/server/models/user.model.js");
// var userModel = new userModule(app);
// var formModule = require("/assignment/server/models/form.model.js");
// var formModel = new formModule(app);

// // CRUD - User
// app.post("/api/assignment/user", function(req, res) {
// 	var user = {
// 		id : req.body.id,
// 		firstName : req.body.firstName,
// 		lastName : req.body.lastName,
// 		username : req.body.username,
// 		password : req.body.password
// 	};
// 	// var users = require("/assignment/server/models/user.mock.js");
// 	// users.push(user);
// 	// res.send(users);
// 	res.send(userModel.createUser(user));
// });
// app.get("/api/assignment/user", function(req, res) {
// 	// var users = require("/assignment/server/models/user.mock.js");
// 	// res.send(users);

// 	var username = req.query.username;
// 	var password = req.query.password;
// 	if (username != null && password != null) {
// 		var credentials = {
// 			username : username,
// 			password : password
// 		};
// 		res.send(userModule.findUserByCredentials(credentials));
// 	} else if (username != null) {
// 		res.send(userModule.findUserByUsername(username));
// 	} else {
// 		res.send(userModule.findAllUsers());
// 	}
// });
// app.get("/api/assignment/user/:id", function(req, res) {
// 	var id = req.params.id;
// 	res.send(userModule.findUserById(id));
// });
// app.put("/api/assignment/user/:id", function(req, res) {
// 	var id = req.params.id;
// 	var user = {
// 		id : req.body.id,
// 		firstName : req.body.firstName,
// 		lastName : req.body.lastName,
// 		username : req.body.username,
// 		password : req.body.password
// 	};
// 	res.send(userModule.updateUser(id, user));
// });
// app.put("/api/assignment/user/:id", function(req, res){
// 	var id = req.params.id;
// 	res.send(userModule.deleteUser(id));
// });

// // CRUD - Forms
// app.post("/api/assignment/user/:userId/form", function(req, res){});
// app.get("/api/assignment/user/:userId/form", function(req, res){
// 	var forms = require("/assignment/server/models/form.mock.js");
// 	res.send(forms);
// });
// app.get("/api/assignment/form/:formId", function(req, res){});
// app.put("/api/assignment/form/:formId", function(req, res){});
// app.put("/api/assignment/form/:formId", function(req, res){});

// // CRUD - Fields
// app.post("/api/assignment/form/:formId/field", function(req, res){});
// app.get("/api/assignment/form/:formId/field", function(req, res){});
// app.get("/api/assignment/form/:formId/field/:fieldId", function(req, res){});
// app.put("/api/assignment/form/:formId/field/:fieldId", function(req, res){});
// app.put("/api/assignment/form/:formId/field/:fieldId", function(req, res){});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
