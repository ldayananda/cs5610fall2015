'use strict';
var q = require("q");

module.exports = function(app, model) {
	app.get("/api/project/user", findAllUsers);
	app.put("/api/project/user/:userId", updateUser);
	app.put("/api/project/user/:userId/job/:jobId", updateJob);
	app.put("/api/project/user/:userId/school/:schoolId", updateSchool)
	app.post("/api/project/user/:userId/job", addJob);
	app.post("/api/project/user/:userId/school", addSchool);
	app.post("/api/project/user/", createUser);

	function findAllUsers(req, res) {
		var username = req.query.username;
		var password = req.query.password;

		if (username != null && password != null) {
			var credentials = {
				username : username,
				password : password
			};

			model
				.findUserByCredentials(credentials)
				.then(function(user) {
					res.json(user);
				});
		}
	}

	function updateUser(req, res) {
		model
			.updateUser(req.params.userId, req.body)
			.then(function(user) {
				res.json(user);
			});
	}

	function updateJob(req, res) {
		model
			.updateJob(req.params.userId, req.params.jobId, req.body)
			.then(function(jobs) {
				res.json(jobs);
			});
	}

	function updateSchool(req, res) {
		model
			.updateSchool(req.params.userId, req.params.schoolId, req.body)
			.then(function(schools) {
				res.json(schools);
			});
	}

	function addJob(req, res) {
		model
			.addJob(req.params.userId, req.body)
			.then(function(jobs) {
				res.json(jobs);
			});
	}

	function addSchool(req, res) {
		model
			.addSchool(req.params.userId, req.body)
			.then(function(schools) {
				res.json(schools);
			});
	}

	function createUser(req, res) {
		model
			.createUser(req.body)
			.then(function(user) {
				res.json(user);
			});
	}
}