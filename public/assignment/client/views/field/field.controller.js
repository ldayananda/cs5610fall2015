(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("FieldController", FieldController);

	function FieldController($rootScope, $location, FieldService, $routeParams) {
		var model = this;

		model.addField = addField;
		model.removeField = removeField;

		function init() {
			var user = $rootScope.user;
			if (user == null) {
				model.fields = [];
			}
			console.log("%j\n", $routeParams);
		}
		init();

		function addField(fieldType) {

		}

		function removeField(field) {

		}
	}
})();