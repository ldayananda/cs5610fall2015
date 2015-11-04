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
			.when("/dashboard", {
				templateUrl: "views/dashboard/dashboard.view.html"
			})
			.when("/search", {
				templateUrl: "views/search/search.view.html"
			})
			.otherwise({
				redirectTo: "/home"
			});
	}
})();