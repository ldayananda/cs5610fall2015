'use strict';
var q = require("q");

module.exports = function(app, db) {
	var PowwowSchema = require("./powwow.schema.js")(db);
	var PowwowModel = db.model("PowwowModel", PowwowSchema);

	var api = {
		findAllPowwows : findAllPowwows,
		findAllMessagesReceived : findAllMessagesReceived,
		findAllMessagesSent : findAllMessagesSent,
		findMessageById : findMessageById,
		findPowwowById : findPowwowById
	};
	return api;

	function findAllPowwows(userId) {
		var deferred = q.defer();
		PowwowModel.find(
			function(err, powwows) {
				if (err != null) {
					deferred.reject(err);
					console.log(err);
				} else {
					deferred.resolve(powwows)
				}
			}
		);


		// var powwows = [];

		// for (var i in PowwowModel) {
		// 	var powwow = PowwowModel[i];
		// 	if (powwow.userIds.indexOf(userId) > -1) {
		// 		powwows.push(powwow);
		// 	}
		// }

		// deferred.resolve(powwows);

    	// otherwise return null
    	return deferred.promise;
	}

	function findAllMessagesReceived(userId) {
		var deferred = q.defer();

		PowwowModel.find(
			function(err, powwows) {
				if (err != null) { console.log(err); }

				console.log(powwows);

				var received = [];

				for (var i in powwows) {
					var powwow = powwows[i];
					console.log(powwow.userIds, "contains", userId);

					if (powwow.userIds.indexOf(userId) > -1) {

						for (var j in powwow.messages) {
							var message = powwow.messages[j];

							if (message.recepient_id == userId) {
								console.log("found the right message");
								received.push(message);
							}
						}
					}
				}

				console.log(received);
				deferred.resolve(received);
			}
		);

		// findAllPowwows(userId)
		// 	.then(function(powwows) {

		// 		for (var i in powwows) {
		// 			var powwow = powwows[i];
		// 			var messages = powwow.messages;

		// 			for (var j in messages) {
		// 				var message = messages[j];

		// 				if (message.recepient_id == userId) {
		// 					msgs.push(message);
		// 				}
		// 			}
		// 		}

		// 		deferred.resolve(msgs);
		// 	});

    	// otherwise return null
    	return deferred.promise;
	}

	function findAllMessagesSent(userId) {
		var deferred = q.defer();

		PowwowModel.find(
			function(err, powwows) {
				if (err != null) { console.log(err); }

				console.log(powwows);

				var sent = [];

				for (var i in powwows) {
					var powwow = powwows[i];
					console.log(powwow.userIds, "contains", userId);

					if (powwow.userIds.indexOf(userId) > -1) {

						for (var j in powwow.messages) {
							var message = powwow.messages[j];

							if (message.sender_id == userId) {
								console.log("found the right message");
								sent.push(message);
							}
						}
					}
				}

				console.log(sent);
				deferred.resolve(sent);
			}
		);
		// var deferred = q.defer();
		// var msgs = [];

		// findAllPowwows(userId)
		// 	.then(function(powwows) {

		// 		for (var i in powwows) {
		// 			var powwow = powwows[i];
		// 			var messages = powwow.messages;

		// 			for (var j in messages) {
		// 				var message = messages[j];

		// 				if (message.sender_id == userId) {
		// 					msgs.push(message);
		// 				}
		// 			}
		// 		}

		// 		deferred.resolve(msgs);
		// 	});

    	// otherwise return null
    	return deferred.promise;
	}

	function findPowwowById(powwowId) {
		var deferred = q.defer();

		for (var i in PowwowModel) {
			var powwow = PowwowModel[i];

			if (powwow._id == powwowId) {
				deferred.resolve(powwow);
			}
		}

    	// otherwise return null
    	return deferred.promise;
	}

	function findMessageById(powwowId, messageId) {
		var deferred = q.defer();

		PowwowModel.findOne(
			{ _id : powwowId },
			function(err, powwow) {
				if (err != null) { console.log(err); }

				for (var i in powwow.messages) {
					console.log("checking", powwow.messages[i]._id, messageId);
					if (powwow.messages[i]._id == messageId) {
						deferred.resolve(powwow.messages[i]);
					}
				}
			}
		);

		// for (var i in PowwowModel) {
		// 	var powwow = PowwowModel[i];

		// 	if (powwow._id == powwowId) {
		// 	var messages = powwow.messages;

		// 		for (var j in messages) {
		// 			var message = messages[j];

		// 			if (message._id == messageId) {
		// 				deferred.resolve(message);
		// 			}
		// 		}
		// 	}
		// }

    	// otherwise return null
    	return deferred.promise;	
	}
}