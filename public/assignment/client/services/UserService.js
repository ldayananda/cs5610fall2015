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
				.get("/api/assignment/user?username="+ username + "&password=" + password)
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;
			// var len = users.length;
			// for (var i = 0; i < len; i++) {
			// 	if (users[i].username == username &&
			// 		users[i].password == password) {
			// 		return users[i];
			// 	}
			// }
			// return null;
		}

		function findAllUsers() {
			var deferred = $q.defer();
			$http
				.get("/api/assignment/user")
				.success(function(response) {
					deferred.resolve(response);
				});

			return deferred.promise;

			// return users;
		}

		function createUser(user) {
			var deferred = $q.defer;
			
			$http
				.post("/api/assignment/user")
				.success(function(response) {
					deferred.resolve(response);
				});
			// sends user to the web service endpoint

			return deferred.promise;
			// var guid = this.guid(); 
			// user.id = guid;
			// users.push(user);
			// return user;
		}

		function deleteUserById(userId) {
			var deferred = $q.defer;

			$http
				.delete("/api/assignment/user/" + userId)
				.success(function(response){
					deferred.resolve(response);
				})

			return deferred.promise;

			// var len = users.length;
			// for (var i = 0; i < len; i++) {
			// 	if (users[i].id == userId) {
			// 		users.splice(i, 1);
			// 	}
			// }
			// return users;
		}

		function updateUser(userId, newUser) {
			var deferred = $q.defer;

			$http
				.put("/api/assignment/user/" + userId, newUser)
				.success(function(response) {
					deferred.resolve(response);
				})

			return deferred.promise;
			// var len = users.length;
			// for (var i = 0; i < len; i++) {
			// 	if (users[i].id == userId) {
			// 		users[i].username = newUser.username;
			// 		users[i].password = newUser.password;
			// 		return users[i];
			// 	}
			// }
			// return null;
		}

		// function guid() {
  		// 			function s4() {
		//     return Math.floor((1 + Math.random()) * 0x10000)
		//       .toString(16)
		//       .substring(1);
		// 	}

	 	//    	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	 	//    	s4() + '-' + s4() + s4() + s4();
		// }
	}
})();