(function() {
	var app = angular.module("FormBuilderApp");

	app.controller("HeaderController", HeaderController);

	function HeaderController($scope, $location) {
		$scope.location = $location;
		//console.log($location.url());
	}
})();