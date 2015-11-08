(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("HeaderController", HeaderController);

	function HeaderController($scope, $location) {
		$scope.location = $location;
		$scope.isActive = isActive;

		function isActive(viewLocation) { 
        	return viewLocation === $location.path();
    	}
	}
})();