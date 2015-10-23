(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("LoginController", LoginController);

	function LoginController ($scope, UserService) {

		function login (username, password) {
			$scope.user = UserService.findUserByUsernameAndPassword(username, password);

			if (user != null) {
				$rootScope.user = user;
				$location = "../profile";
			}
		}
	}
})();