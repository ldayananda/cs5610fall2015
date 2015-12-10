'use strict';
var q = require("q");

module.exports = function(app, db, model) {
	app.get("/api/project/user/:userId/powwow", findAllPowwows);
	app.get("/api/project/user/:userId/messages", findAllMessagesReceived);
	app.get("/api/project/powwow/:powwowId/message/:messageId", findMessageById);

	function findAllPowwows(req, res) {
		model
			.findAllPowwows(req.params.userId)
			.then(function(powwows) {
				res.json(powwows);
			});
	}

	function findAllMessagesReceived(req, res) {
		var type = req.query.type;

		if (type == "received") {
			model
				.findAllMessagesReceived(req.params.userId)
				.then(function(messages) {
					res.json(messages);
				});

		} else {
			model
				.findAllMessagesSent(req.params.userId)
				.then(function(messages) {
					res.json(messages);
				});
		}
	}

	function findMessageById(req, res) {
		model
			.findMessageById(req.params.powwowId, req.params.messageId)
			.then(function(message) {
				res.json(message);
			});
	}
}