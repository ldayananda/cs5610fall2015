'use strict';
var q = require("q");

module.exports = function(app) {
	var UserModel = require("./user.mock.js");

	var api = {
		findUserByCredentials : findUserByCredentials
	};
	return api;

	function findUserByCredentials(credentials) {
		var deferred = q.defer();

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user.username == credentials.username &&
				user.password == credentials.password) {

				deferred.resolve(user);
			}
		}

    	// otherwise return null
    	return deferred.promise;
	}
}