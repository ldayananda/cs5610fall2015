(function(){
  angular
    .module("FormBuilderApp")
    .config(['$routeProvider', RouteController]);

    function RouteController($routeProvider){
      $routeProvider
        .when("/home", {
        	templateUrl : "views/home/home.view.html"
        })
        .when("/profile", {
          templateUrl: "views/profile/profile.view.html",
          controller: "ProfileController"
        })
        .when("/admin", {
          templateUrl: "views/admin/admin.view.html",
          controller: "AdminController"
        })
        .when("/login", {
        	templateUrl : "views/login/login.view.html",
			controller : "LoginController"
		})
        .when("/register", {
        	templateUrl : "views/register/register.view.html",
			controller : "RegisterController"
		})
		.when("/forms", {
			templateUrl : "views/form/form.view.html",
			controller : "FormController"
		})			
        .otherwise({
          redirectTo: "/home"
        });
    }
})();