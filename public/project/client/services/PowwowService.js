'use strict';
(function() {
	var app = angular.module("JobHuntingApp");
	app.factory("PowwowService", PowwowService);

	function PowwowService($http, $q) {
		var service = {
			findAllPowwows : findAllPowwows,
			findAllMessagesReceived : findAllMessagesReceived
		}
		return service;

		function findAllPowwows(userId) {
			var deferred = $q.defer();
			$http
				.get("/api/project/user/" + userId + "/powwow")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		} 

		function findAllMessagesReceived(userId) {
			var deferred = $q.defer();
			$http
				.get("/api/project/user/" + userId + "/messages")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}
	}
})();