(function() {
	var app = angular.module("JobHuntingApp");
	app.config(['$routeProvider', RouteController]);

	function RouteController($routeProvider) {
		// $routeProvider
		// 	.when("/home", {
		// 		templateUrl: "home/home.view.html"
		// 	})
		// 	.otherwise({
		// 		redirectTo: "/home"
		// 	});
	}
})();