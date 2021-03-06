(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($rootScope, $location, UserService) {
		var model = this;

		$rootScope.location = $location; 
		model.location = $location;
		model.login = login;

		function init() {
			// Future initalization goes here
		}
		init();

		function login(user) {
			UserService
				.findUserByUsernameAndPassword(user.username, user.password)
				.then(function(user) {
					model.user = user;

					if (model.user != null) {
						$rootScope.user = model.user;
						$location.path("/profile");
					} else {
						$location.path("/home");
					}
				});
		}
	}
})();