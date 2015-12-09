'use strict';
(function() {
	var app = angular.module("JobHuntingApp");
	app.config(['$routeProvider', RouteController]);

	function RouteController($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "views/home/home.view.html"
			})
			.when("/login", {
				templateUrl: "views/login/login.view.html",
				controller : "LoginController",
				controllerAs : "model"
			})
			.when("/register", {
				templateUrl: "views/register/register.view.html",
				controller : "RegisterController",
				controllerAs: "model"
			})
			.when("/profileBuilder", {
				templateUrl : "views/addJobEducation/addJobEducation.view.html",
				controller : "RegisterController",
				controllerAs : "model"
			})
			.when("/profile", {
				templateUrl: "views/profile/profile.view.html",
				controller : "ProfileController",
				controllerAs: "model"
			})
			.when("/user/:userId/profile", {
				templateUrl : "views/publicProfile/publicProfile.view.html",
				controller : "PublicProfileController",
				controllerAs : "model"
			})
			.when("/powwow/:powwowId/message/:messageId", {
				templateUrl : "views/message/message.view.html",
				controller : "MessageController",
				controllerAs : "model"
			})
			.when("/dashboard", {
				templateUrl: "views/dashboard/dashboard.view.html"
			})
			.when("/search", {
				templateUrl: "views/search/search.view.html"
			})
			.when("/listing", {
				templateUrl: "views/listing/listing.view.html"
			})
			.when("/powwow/inbox", {
				templateUrl: "views/powwow/powwow.inbox.view.html",
				controller : "PowwowController",
				controllerAs : "model"
			})
			.when("/powwow/sent", {
				templateUrl: "views/powwow/powwow.sent.view.html",
				controller : "PowwowController",
				controllerAs : "model"
			})
			.when("/resumeDialog", {
				templateUrl: "views/resumeDialog/resumeDialog.view.html"
			})
			.otherwise({
				redirectTo: "/home"
			});
	}
})();