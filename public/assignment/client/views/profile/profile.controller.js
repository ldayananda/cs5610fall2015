(function () {
	var app = angular.module("FormBuilderApp");

	app.controller("ProfileController", ProfileController);

	function ProfileController($rootScope, $location, UserService) {
		var model = this;

		model.update = update;

		function init() {
			UserService
				.findAllUsers()
				.then(function(users) {
					model.users = users;
				});
		}
		init();

		function update(user) {
			var newUser = {
				id : user.id,
				username : user.username,
				password : user.password,
				firstName : user.firstName,
				lastName : user.lastName
			}

			$location.path("/profile");
			UserService
				.updateUser(user.id, newUser)
				.then(function(users) {
					model.users = users;
				})
		}

		var currUser = $rootScope.user;
		if (currUser != null) {
			model.user = currUser;

			model.user.username  = currUser.username;
			model.user.password  = currUser.password;
			model.user.fname  = currUser.fname;
			model.user.lname  = currUser.lname;
			model.user.email  = currUser.email;
		}
	} 
})();