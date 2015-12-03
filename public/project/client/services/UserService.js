'use strict';
(function() {
	var app = angular.module("JobHuntingApp");
	app.factory("UserService", UserService);

	function UserService($http, $q) {
		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword
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
	}
})();