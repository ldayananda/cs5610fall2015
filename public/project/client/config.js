(function() {
	var app = angular.module("JobHuntingApp");
	app.config(['$routeProvider', RouteController]);

	function RouteController($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "views/home/home.view.html"
			})
			.when("/login", {
				templateUrl: "views/login/login.view.html"
			})
			.when("/register", {
				templateUrl: "views/register/register.view.html"
			})
			.when("/profile", {
				templateUrl: "views/profile/profile.view.html"
			})
			.otherwise({
				redirectTo: "/home"
			});
	}
})();