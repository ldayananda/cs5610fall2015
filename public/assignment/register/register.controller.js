(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("RegisterController", RegisterController);

	function RegisterController ($rootScope, $scope, $location, $window, UserService) {
		$scope.register = register;

		function register(user) {
			if (user.password != user.verifyPassword) {
				return null;
			}

			var newUser = UserService.createUser(user);
			newUser.username = user.username;
			newUser.password = user.password;
			newUser.email = user.email;

			$rootScope.user = newUser;
			$location.path("profile").replace();
			$window.location = $location.absUrl();
		}
	}

})();