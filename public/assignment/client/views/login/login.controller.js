(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($rootScope, $location, UserService) {
		var model = this;

		$rootScope.location = $location; 
		model.location = $location;
		model.login = login;

		function init() {
			// dunno what to do here
		}
		init();

		function login (user) {
			UserService
				.findUserByUsernameAndPassword(user.username, user.password)
				.then(function(user) {
					model.user = user;
					$rootScope.user = user;
				});

			if (model.user != null) {
				$rootScope.user = user;
				$location.path("/profile");

			} else {
				$location.path("/home");
			}
		}
	}
})();