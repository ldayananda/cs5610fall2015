(function(){
  angular
    .module("FormBuilderApp")
    .config(RouteController);

    function RouteController($routeProvider){
      $routeProvider
      	.when("/", {
      		redirectTo : "/home"
      	})
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
        .otherwise({
          redirectTo: "/home"
        });
    }
})();