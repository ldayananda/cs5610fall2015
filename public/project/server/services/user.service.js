'use strict';
var q = require("q");

module.exports = function(app, model) {
	app.get("/api/project/user", findAllUsers);

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
}