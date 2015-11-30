// Set up Express.js
var express = require('express');
var app = express();

// Set up the Body Parser to read json
var bodyParser = require("body-parser");
var multer = require("multer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());

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


function renderUsers(err, results) {
	for (var u in results) {
		var firstName = results[u].firstName;
		var lastName = results[u].lastName;
		var username = results[u].username;
		var password = results[u].password;

		console.log([firstName, lastName, username, password]);
	}
}

function renderForms(err, results) {
	for (var f in results) {
		var title = results[f].title;
		var userId = results[f].userId;
		var fields = results[f].fields;

		console.log([title, userId, "->"]);
		for (field in fields) {
			console.log("\t", field);
		}
	}
}

// var FormSchema = new db.Schema(
// 	{
// 		title : String,
// 		userId : db.Schema.Types.ObjectId,
// 		fields : Array
// 	}, 
// 	{collection : "cs5610.assignment.form"}
// );
// var FormModel = db.model("FormModel", FormSchema);

// FormModel.create(
// 	{title :"blah", userId : new db.Types.ObjectId, fields : []}, 
// 	function(err, results) {
// 		console.log(err);
// 		console.log(results);
// 	}
// );

// app.get("/rest/form", function(req, res) {
// 	var title = req.query.title;

// 	if (title != null) {
// 		FormModel.findOne(
// 			{ title : title },
// 			function(err, data) {
// 				res.json(data);
// 			}
// 		);
// 	} else {

// 		FormModel.find(function(err, results) {
// 			res.json(results);
// 		});
// 	}
// });

// app.get("/rest/form/:formId/field", function(req, res) {
// 	FormModel.findOne(
// 		{ _id : formId },
// 		function(err, form) {
// 			if (err != null) { console.log(err); }
// 			res.json(form.fields);
// 		});
// });

// app.get("/rest/form/:formId/field/:fieldId", function(req, res) {
// 	FormModel.findOne(
// 		{ _id : formId },
// 		function(err, form) {
// 			if (err != null) { console.log(err); }

// 			for (f in form.fields) {
// 				if (f._id == fieldId) {
// 					res.json(f);
// 				}
// 			}
// 		});
// });

// app.post("/rest/form/:formId/field", function(req, res) {
// 	var field = req.body;

// 	FormModel.findOne(
// 		{ _id : formId },
// 		function(err, form) {
// 			if (err != null) { console.log(err); }
// 			form.fields.push(field);

// 			form.save(function(err, form) {
// 				res.json(form);
// 			});

// 			// FormModel.findOneAndUpdate(
// 			// 	{ _id : formId },
// 			// 	form,
// 			// 	function(err, response) {
// 			// 		console.log(response);
// 			// 	}
// 			// );
// 		}
// 	);
// });

// app.put("/rest/form/:formId/field/:fieldId", function(req, res) {
// 	var field = req.body;

// 	FormModel.findOne(
// 		{_id : formId },
// 		function(err, form) {
// 			for (var f in form.fields) {
// 				if (form.fields[f]._id == fieldId) {
// 					form.fields[f] = field;

// 					form.save(function(err, form) {
// 						res.json(form);
// 					});
// 				}
// 			}
// 		}
//  	);
// });

// app.delete("/rest/form/:formId/field/:fieldId", function(req, res) {
// 	FormModel.findOne(
// 		{ _id : formId },
// 		function(err, form) {
// 			for (var f in form.fields) {
// 				if (form.fields[f]._id == fieldId) {
// 					form.fields.splice(f, 1);

// 					form.save(function(err, form) {
// 						res.json(form);
// 					});
// 				}
// 			}
// 		}
// 	);
// });

// app.get("/rest/form/:formId", function(req, res) {
// 	FormModel.findOne({ _id : req.params.formId }, function(err, results) {
// 		console.log(err);
// 		res.json(results);
// 	});
// });

// app.post("/rest/form", function(req, res) {
// 	var form = req.body;

// 	FormModel.create(form, function(err, data) {
// 		res.json(data);
// 	});
// });

// app.put("/rest/form/:formId", function(err, data) {
// 	var form = req.body;

// 	FormModel.findOneAndUpdate(
// 		{_id : req.params.formId },
// 		form, 
// 		function(err, data) {
// 			res.json(data);
// 		}
// 	);
// });

// app.delete("/rest/form/:formId", function(err, data) {
// 		FormModel.remove( 
// 			{ _id : req.params.formId }, 
// 			function(err, results) {
// 				res.json(results);
// 			}
// 		);
// });

// app.get("/rest/user/:id", function(req, res) {
// 	findById(req.params.id, function(err, data) {
// 		res.json(data);
// 	});
// });

// app.post("/rest/user", function(req, res) {
// 	createUser(req.body, function(err, data) {
// 		res.json(data);
// 	});
// })

// app.put("/rest/user/:id", function(req, res) {
// 	var user = req.body;

// 	UserModel.findOneAndUpdate(
// 		{ _id : req.params.id }, 
// 		user, 
// 		function(err, data) {
// 			res.json(data);
// 		};
// 	);
// });

// app.delete("/rest/user/:id", function(req, res) {
// 	UserModel.remove({ _id : req.params.id }, function(err, data) {
// 		UserModel.find(function(err, data) {
// 			res.json(data);
// 		});
// 	});
// });




// Set the server to listen at port and ip:
app.listen(port, ipaddress);