'use strict';
var q = require("q");

module.exports = function(app) {
	var PowwowModel = require("./powwow.mock.js");

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
		var powwows = [];

		for (var i in PowwowModel) {
			var powwow = PowwowModel[i];
			if (powwow.userIds.indexOf(userId) > -1) {
				powwows.push(powwow);
			}
		}

		deferred.resolve(powwows);

    	// otherwise return null
    	return deferred.promise;
	}

	function findAllMessagesReceived(userId) {
		var deferred = q.defer();
		var msgs = [];

		findAllPowwows(userId)
			.then(function(powwows) {

				for (var i in powwows) {
					var powwow = powwows[i];
					var messages = powwow.messages;

					for (var j in messages) {
						var message = messages[j];

						if (message.recepient_id == userId) {
							msgs.push(message);
						}
					}
				}

				deferred.resolve(msgs);
			});

    	// otherwise return null
    	return deferred.promise;
	}

	function findAllMessagesSent(userId) {
		var deferred = q.defer();
		var msgs = [];

		findAllPowwows(userId)
			.then(function(powwows) {

				for (var i in powwows) {
					var powwow = powwows[i];
					var messages = powwow.messages;

					for (var j in messages) {
						var message = messages[j];

						if (message.sender_id == userId) {
							msgs.push(message);
						}
					}
				}

				deferred.resolve(msgs);
			});

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

		for (var i in PowwowModel) {
			var powwow = PowwowModel[i];

			if (powwow._id == powwowId) {
			var messages = powwow.messages;

				for (var j in messages) {
					var message = messages[j];

					if (message._id == messageId) {
						deferred.resolve(message);
					}
				}
			}
		}

    	// otherwise return null
    	return deferred.promise;	
	}
}