(function(){
	var app = angular.module("JobHuntingApp");
	app.controller("PublicProfileController", PublicProfileController);

	function PublicProfileController($rootScope) {
		var model = this;

		function init() {
			model.user = $rootScope.user;
		}
		init();
	}

})();