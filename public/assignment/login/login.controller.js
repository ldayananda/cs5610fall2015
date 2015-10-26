(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($scope, $rootScope, $location, UserService) {
		$rootScope.login = login;
		$rootScope.location = $location; 

		function login (user) {
			var user = UserService.findUserByUsernameAndPassword(user.username, user.password);

		//	$rootScope.location = $location;
			if (user != null) {
				$rootScope.user = user;
				$location.path("#/profile");

			} else {
				$location.path("#/home");
			}
		}
	}
})();