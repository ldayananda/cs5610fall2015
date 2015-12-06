'use strict';
(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("LoginController", LoginController);

	function LoginController($rootScope, $location, UserService) {
		var model = this;

		$rootScope.location = $location;
		model.location = $location;
		model.login = login;

		function init(){}
		init();

		function login(user) {
			UserService
				.findUserByUsernameAndPassword(user.username, user.password)
				.then(function(user) {
					model.user = user;

					if (model.user != null) {
						$rootScope.user = user;
						model.location.path("user/" + model.user._id + "/profile");
					} else {
						model.location.path("/login");
					}
				});
		}
	}
})();