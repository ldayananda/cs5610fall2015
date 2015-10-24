(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($rootScope, $location, UserService) {

		$rootScope.login = login;

		function login (user) {
			var user = UserService.findUserByUsernameAndPassword(user.username, user.password);
			console.log(user);

			$rootScope.location = $location;
			if (user != null) {
				$rootScope.user = user;
				$location.url('#/profile');
							console.log($location.url());
			} else {
				$location.url('#/home');
							console.log($location.url());
			}

			$location.path('#/profile');
    		$location.path() == '#/profile';

			console.log($location.url());
		}
	}
})();