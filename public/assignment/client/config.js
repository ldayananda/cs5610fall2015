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
      controller: "ProfileController",
      controllerAs: "model"
    })
    .when("/admin", {
      templateUrl: "views/admin/admin.view.html",
      controller: "AdminController",
      controllerAs: "model"
    })
    .when("/login", {
     templateUrl : "views/login/login.view.html",
     controller : "LoginController",
     controllerAs: "model"
   })
    .when("/register", {
     templateUrl : "views/register/register.view.html",
     controller : "RegisterController",
     controllerAs: "model"
   })
    .when("/forms", {
     templateUrl : "views/form/form.view.html",
     controller : "FormController",
     controllerAs: "model"
   })		
    .when("/user/:userId/form/:formId/field", {
      templateUrl : "views/field/field.view.html",
      controller : "FieldController",
      controllerAs : "model"
    })	
    .when("/fields", {
      templateUrl : "views/field/field.view.html",
      controller: "FieldController",
      controllerAs : "model"
    })
    .otherwise({
      redirectTo: "/home"
    });
  }
})();