(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("SidebarController", SidebarController);

	function SidebarController($scope, $location) {
		$scope.location = $location;
		//console.log($location.url());
	}
})();