(function() {
	var app = angular.module("FormBuilderApp");

	app.factory("UserService", UserService);

	function UserService() {
		var users = [
			{username : "Phil", password : "a"},
			{username : "Alice", password : "b"}
		];

		var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
			findAllUsers : findAllUsers,
			createUser : createUser,
			deleteUserById : deleteUserById,
			updateUser : updateUser,
			guid : guid
		};
		return service;

		function findUserByUsernameAndPassword(username, password) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].username == username &&
					users[i].password == password) {
					return users[i];
				}
			}
			return null;
		}

		function findAllUsers() {
			return users;
		}

		function createUser(user) {
			var guid = this.guid(); 
			user.id = guid;
			users.push(user);
			return user;
		}

		function deleteUserById(userId) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].id == userId) {
					users.splice(i, 1);
				}
			}
			return users;
		}

		function updateUser(userId, newUser) {
			var len = users.length;
			for (var i = 0; i < len; i++) {
				if (users[i].id == userId) {
					users[i].username = newUser.username;
					users[i].password = newUser.password;
					return users[i];
				}
			}
			return null;
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