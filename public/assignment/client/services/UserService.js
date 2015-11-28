(function() {
	var app = angular.module("FormBuilderApp");

	app.factory("UserService", UserService);

	function UserService($http, $q) {

		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			findAllUsers : findAllUsers,
			createUser : createUser,
			deleteUserById : deleteUserById,
			updateUser : updateUser
		};
		return service;

		function findUserByUsernameAndPassword(username, password) {
			var deferred = $q.defer();
			$http
				// .get("/rest/user?username="+ username + "&password=" + password)
				.get("/api/assignment/user?username="+ username + "&password=" + password)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function findAllUsers() {
			var deferred = $q.defer();
			$http
				.get("/api/assignment/user")
				// .get("/rest/user")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
		}

		function createUser(user) {
			var deferred = $q.defer();
			
			$http
				// .post("/rest/user", user)
				.post("/api/assignment/user", user)
				.success(function(response) {
					deferred.resolve(response);
				});
			// sends user to the web service endpoint

			return deferred.promise;
		}

		function deleteUserById(userId) {
			var deferred = $q.defer();

			$http
				// .delete("/rest/user/" + userId)
				.delete("/api/assignment/user/" + userId)
				.success(function(response){
					deferred.resolve(response);
				})

			return deferred.promise;
		}

		function updateUser(userId, newUser) {
			var deferred = $q.defer();

			$http
				// .put("/rest/user/" + userId, newUser)
				.put("/api/assignment/user/" + userId, newUser)
				.success(function(response) {
					deferred.resolve(response);
				})

			return deferred.promise;
		}
	}
})();