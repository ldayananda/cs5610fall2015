(function() {
	var app = angular.module("FormBuilderApp");

	app.factory("UserService", UserService);

	function UserService() {
		var users = [
			{username : "Phil", password : "a"},
			{username : "Alice", password : "b"},
		];

		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			findAllUsers : findAllUsers,
			createUser : createUser,
			deleteUserById : deleteUserById,
			updateUser : updateUser
		};
		return service;

		function findUserByUsernameAndPassword(username, password, callback) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].username == username &&
					users[i].password == password) {
					callback(users[i]);
				}
			}
			callback(null);
		}

		function findAllUsers(callback) {
			callback(users);
		}

		function createUser(user, callback) {
			var guid = guid(); //Guid.create();
			//Guid.isGuid(guid);

			user.id = guid;
			users.push(user);
			callback(user);
		}

		function deleteUserById(userId, callback) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].id == userId) {
					users.splice(i, 1);
				}
			}
			callback(users);
		}

		function updateUser(userId, newUser, callback) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].id == userId) {
					users[i].username = newUser.username;
					users[i].password = newUser.password;
					callback(users[i]);
				}
			}
			callback(null);
		}

		function guid() {
  			function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
			}

	    	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    	s4() + '-' + s4() + s4() + s4();
		}
	}
})();