(function() {
	var app = angular.module("FormBuilderApp", []);
	app.controller(SidebarController);

	function SidebarController($scope, $location) {
		$scope.location = $location;
	}
})();