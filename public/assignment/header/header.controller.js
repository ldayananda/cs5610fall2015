(function() {
	var app = angular.module("FormBuilderApp", []);

	app.controller("HeaderController", [$scope, HeaderController]);

	function HeaderController($scope, $location) {
		$scope.location = $location;
	}
})();