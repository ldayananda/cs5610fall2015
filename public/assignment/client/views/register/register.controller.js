(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("RegisterController", RegisterController);

	function RegisterController($rootScope, $location, $window, UserService) {
		var model = this;

		model.register = register;

		function init() {
			UserService
				.findAllUsers()
				.then(function(users) {
					model.users = users;
				});
		}
		init();

		function register(user) {
			if (user.password != user.verifyPassword) {
				$location.path("#/register");
				return null;
			}

			var newUser = {
				firstName : user.firstName,
				lastName : user.lastName,
				username : user.username,
				password : user.password
			};

			UserService
				.createUser(newUser)
				.then(function(users) {
					model.users = users;
				});

			$location.path("/profile");
		}
	}

})();