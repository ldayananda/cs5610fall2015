(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($rootScope, $location, $window, UserService) {

		$rootScope.login = login;

		function login (user) {
			var user = UserService.findUserByUsernameAndPassword(user.username, user.password);
			console.log(user);

			$rootScope.location = $location;
			if (user != null) {
				$rootScope.user = user;
				$location.path("profile").replace();
			} else {
				$location.path("home").replace();
			}

    		$window.location = $location.absUrl();
    		console.log("location window " + $window.location);
    		console.log("href " + $window.location.href);
    		console.log("location " + $location.absUrl());
		}
	}
})();