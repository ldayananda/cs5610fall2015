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

			model.userId = $routeParams.userId
			model.formId = $routeParams.formId

			FieldService
				.getFieldsForForm(model.formId)
				.then(function(fields) {

					model.fields = fields;
				});
		}
		init();

		function addField(fieldType, field) {
			FieldService
				.createFieldForForm(model.formId, field)
				.then(function(fields) {
					model.fields = fields;
				});
		}

		function removeField(field) {
			FieldService
				.deleteFieldFromForm(model.formId, field.id)
				.then(function(fields) {
					model.fields = fields;
				});
		}
	}
})();