(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("RegisterController", RegisterController);

	function RegisterController ($rootScope, $scope, $location, $window, UserService) {
		$scope.register = register;

		function register(user) {
			if (user.password != user.verifyPassword) {
				$location.path("#/register");
				return null;
			}

			var newUser = {
				username : user.username,
				password : user.password,
				email : user.email
			};

			$rootScope.user = UserService.createUser(newUser);
			$location.path("/profile");
		}
	}

})();