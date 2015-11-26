(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("HeaderController", HeaderController);

	function HeaderController($rootScope, $scope, $location) {
		$scope.location = $location;
		$scope.isActive = isActive;
		$scope.logout = logout;

		function isActive(viewLocation) { 
        	return viewLocation === $location.path();
    	}

    	function logout() {
    		$rootScope.user = null;
    		$location.path("/home");
    	}
	}
})();