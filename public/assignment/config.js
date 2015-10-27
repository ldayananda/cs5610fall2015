(function(){
  angular
    .module("FormBuilderApp")
    .config(['$routeProvider', RouteController]);

    function RouteController($routeProvider){
      $routeProvider
      	// .when("/", {
      	// 	redirectTo : "/home"
      	// })
        .when("/home", {
        	templateUrl : "home/home.view.html"
        })
        .when("/profile", {
          templateUrl: "profile/profile.view.html",
          controller: "ProfileController"
        })
        .when("/admin", {
          templateUrl: "admin/admin.view.html",
          controller: "AdminController"
        })
        .when("/login", {
        	templateUrl : "login/login.view.html",
			controller : "LoginController"
		})
        .when("/register", {
        	templateUrl : "register/register.view.html",
			controller : "RegisterController"
		})
		.when("/forms", {
			templateUrl : "form/form.view.html",
			controller : "FormController"
		})			
        .otherwise({
          redirectTo: "/home"
        });
    }
})();

// (function() {
//   angular
//     .module("FormBuilderApp")
//     .config(function($routeProvider) {
//       $routeProvider
//       .when("/home", {
//       	templateUrl: "home/home.view.html"
//       })
//       .when("/login", {
//       	templateUrl: "login/login.view.html",
//       	controller: "login.controller.js"
//       })
//       .when("/register", {
//       	templateUrl: "register/register.view.html",
//       	controller: "register.controller.js"
//       })
//       .when("/profile", {
//       	templateUrl: "profile/profile.html",
//       	controller: "profile.controller.js"
//       })
//       .when("/admin", {
//       	templateUrl: "admin/admin.view.html",
//       	controller: "admin.controller.js"
//       })
//       .when("/forms", {
//       	templateUrl: "form/form.view.html",
//       	controller: "form.controller.js"
//       })
//       .otherwise({
//       	redirectTo: "/home"
//       })
//     });
// })();