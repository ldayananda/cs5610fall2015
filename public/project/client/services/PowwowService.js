'use strict';
(function() {
	var app = angular.module("JobHuntingApp");
	app.factory("PowwowService", PowwowService);

	function PowwowService($http, $q) {
		var service = {
			findAllPowwows : findAllPowwows,
			findAllMessagesReceived : findAllMessagesReceived,
			findAllMessagesSent : findAllMessagesSent,
			findMessageById : findMessageById
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
				.get("/api/project/user/" + userId + "/messages?type=received")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function findAllMessagesSent(userId) {
			var deferred = $q.defer();
			$http
				.get("/api/project/user/" + userId + "/messages?type=sent")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;		
		}

		function findMessageById(powwowId, messageId) {
			var deferred = $q.defer();
			$http
				.get("/api/project/powwow/" + powwowId + "/message/" + messageId)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;	
		}
	}
})();