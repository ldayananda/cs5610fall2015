'use strict';
var q = require("q");

module.exports = function(app, db, model) {
	app.get("/api/project/user", findAllUsers);
	app.post("/api/project/user/", createUser);
	app.get("/api/project/user/:userId", findUserById);
	app.get("/api/project/user/:userId/job", findAllJobs);
	app.put("/api/project/user/:userId", updateUser);
	app.put("/api/project/user/:userId/job/:jobId", updateJob);
	app.put("/api/project/user/:userId/school/:schoolId", updateSchool);
	app.post("/api/project/user/:userId/job", addJob);
	app.post("/api/project/user/:userId/school", addSchool);
	app.post("/api/project/user/:userId/skill", addSkill);
	app.put("/api/project/user/:userId/skill", updateSkills);
	app.post("/api/project/user/:userId/interest", addInterest);
	app.put("/api/project/user/:userId/interest", updateInterests)


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

	function findUserById(req, res) {
		console.log("requesting most recent job");
		model
			.findUserById(req.params.userId)
			.then(function(user) {
				// console.log("got back in server service", user);
				res.json(user);
			});
	}

	function findAllJobs(req, res) {
		var now = req.query.now;

		if (now != null) {
			findCurrentJob(req, res);

		} else {

			model
				.findAllJobs(req.params.userId)
				.then(function(job) {
					res.json(job);
				});
		}
	}
	function findCurrentJob(req, res) {
		model
			.findCurrentJob(req.params.userId)
			.then(function(job) {
				res.json(job);
			}, function(err) {
				console.log("findCurrentJob ", err);
			});
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

	function addSkill(req, res) {
		model
			.addSkill(req.params.userId, req.body)
			.then(function(skills) {
				res.json(skills);
			});
	}

	function updateSkills(req, res) {
		model
			.updateSkills(req.params.userId, req.body)
			.then(function(skills) {
				res.json(skills);
			});
	}

	function addInterest(req, res) {
		model
			.addInterest(req.params.userId, req.body)
			.then(function(interests) {
				res.json(interests);
			});
	}

	function updateInterests(req, res) {
		model
			.updateInterests(req.params.userId, req.body)
			.then(function(interests) {
				res.json(interests);
			});
	}
}