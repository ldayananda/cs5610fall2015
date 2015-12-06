'use strict';
(function() {
	var app = angular.module("JobHuntingApp");
	app.factory("UserService", UserService);

	function UserService($http, $q) {
		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			updateUser : updateUser,
			updateJob : updateJob,
			updateSchool : updateSchool,
			addJob : addJob,
			addSchool : addSchool,
			createUser : createUser
		};
		return service;
		
		function findUserByUsernameAndPassword(username, password) {
			var deferred = $q.defer();
			$http
				.get("/api/project/user?username="+ username + "&password=" + password)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function updateUser(userId, newUser) {
			var deferred = $q.defer();

			$http
				.put("/api/project/user/" + userId, newUser)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function updateJob(userId, jobId, newJob) {
			var deferred = $q.defer();

			$http
				.put("/api/project/user/" + userId + "/job/" + jobId, newJob)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function updateSchool(userId, schoolId, newSchool) {
			var deferred = $q.defer();

			$http
				.put("/api/project/user/" + userId + "/school/" + schoolId, newSchool)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function addJob(userId, newJob) {
			var deferred = $q.defer();

			$http
				.post("/api/project/user/" + userId + "/job", newJob)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function addSchool(userId, newSchool) {
			var deferred = $q.defer();

			$http
				.post("/api/project/user/" + userId + "/school", newSchool)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function createUser(user) {
			var deferred = $q.defer();

			$http
				.post("/api/project/user/", user)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}
	}
})();