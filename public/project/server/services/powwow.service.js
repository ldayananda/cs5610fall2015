'use strict';
var q = require("q");

module.exports = function(app, model) {
	app.get("/api/project/user/:userId/powwow", findAllPowwows);
	app.get("/api/project/user/:userId/messages", findAllMessagesReceived);

	function findAllPowwows(req, res) {
		model
			.findAllPowwows(req.params.userId)
			.then(function(powwows) {
				res.json(powwows);
			});
	}

	function findAllMessagesReceived(req, res) {
		model
			.findAllMessagesReceived(req.params.userId)
			.then(function(messages) {
				res.json(messages);
			});
	}
}