(function() {
	angular
		.module("FormBuilderApp")
		.config(RouteController);

	function RouteController($routeProvider) {
			$routeProvider
			// 	.when("/", {
			// 		templateUrl: "index.html"
			// 	})
				// .when("/profile", {
				// 	templateUrl : "profile.html"
				// })
				.when("/home", {
					templateUrl : "home/home.view.html"
				})
			// 	.when("/admin", {
			// 		templateUrl: "admin.html"
			// 	})
				.when("/login", {
					templateUrl : "login/login.view.html",
					controller : "LoginController"

				})
				.when("/register", {
					templateUrl : "register/register.view.html",
					controller : "RegisterController"
				})
			// 	.when("/forms", {
			// 		templateUrl: "forms.html"
			// 	})
			// 	.when("/form-fields", {
			// 		templateUrl: "form-fields.html"
			// 	})
				.otherwise({
                	redirectTo: "/home"
            	});
	}
})();