// Set up Express.js
var express = require('express');
var app = express();

// Set up the Body Parser to read json
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Set up paths to static files for Express.js
app.use(express.static(__dirname + '/public'));
app.use('assignment', express.static(__dirname + '/public/assignment'));
app.use('assignment/css', express.static(__dirname + '/public/assignment/css'));
app.use('project', express.static(__dirname + '/public/project'));
app.use('project/css', express.static(__dirname + '/public/project/css'));

// Configure URLs to listen in to
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// Configure Mongoose to communicate with MongoDB
var db = require('mongoose');
db.connect('mongodb://localhost/cs5610_assignment');

// Connect assignment server to main server by passing the app and Mongo instance
require("./public/assignment/server/app.js")(app, db);
// require("./public/project/server/app.js")(app, db);

var UserSchema = new db.Schema(
	{
		firstName: String,
		lastName: String,
		username: String,
		password: String,
		email: String
	}, 
	{ collection : "user" }
);

var User = db.model("User", UserSchema);

// var user = {"firstName": "Fred", "lastName" : "Folger", "username" : "Fred", password: "freddie"};


function findAll(callback) {
	User.find(callback);
}

function findByUsername(username, callback) {
	User.find({ username : username }, callback);
}

function createUser(user, callback) {
	User.create(user, function(err, result) {
		console.log(err);
		console.log(result);
	});
}

function renderUsers(err, results) {
	for (var u in results) {
		var firstName = results[u].firstName;
		var lastName = results[u].lastName;
		var username = results[u].username;
		var password = results[u].password;

		console.log([firstName, lastName, username, password]);
	}
}

app.get("/rest/user", function(req, res) {
	findAll(function(err, results) {
		res.json(results);
	});
});





// Set the server to listen at port and ip:
app.listen(port, ipaddress);