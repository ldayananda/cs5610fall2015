(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("RegisterController", RegisterController);

	function RegisterController ($scope, UserService) {
		function register(username, password, email, $location) {
			var user = User();
			user.username = username;
			user.password = password;
			user.email = email;
			var newUser = UserService.createUser(user);

			$rootScope.user = newUser;
			$location = "/profile"
		}
	}

})();