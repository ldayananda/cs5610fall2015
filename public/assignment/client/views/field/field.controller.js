(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("FieldController", FieldController);

	function FieldController($rootScope, $location, FieldService, $routeParams) {
		var model = this;

		model.addField = addField;
		model.deleteField = deleteField;

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

			console.log(model.fields);
		}
		init();

		function addField(fieldType) {
			var field;

			switch (fieldType) {
				case "singleLine":
					field = {"label": "New Text Field", "fieldType": "TEXT", "placeholder": "New Field"};
					break;
				case "multiLine":
					field = {"label": "New Text Field", "fieldType": "TEXTAREA", "placeholder": "New Field"};
					break;
				case "date":
					field = {"label": "New Date Field", "fieldType": "DATE"};
					break;
				case "dropdown":
					field = {"label": "New Dropdown", "fieldType": "SELECT", "options": [
						{"label": "Option 1", "value": "OPTION_1"},
						{"label": "Option 2", "value": "OPTION_2"},
						{"label": "Option 3", "value": "OPTION_3"}
					]};
					break;
				case "checkbox":
					field = {"label": "New Checkboxes", "fieldType": "CHECKBOX", "options": [
						{"label": "Option A", "value": "OPTION_A"},
						{"label": "Option B", "value": "OPTION_B"},
						{"label": "Option C", "value": "OPTION_C"}
					]};
					break;
				case "radio":
					field = {"label": "New Radio Buttons", "fieldType": "RADIO", "options": [
						{"label": "Option X", "value": "OPTION_X"},
						{"label": "Option Y", "value": "OPTION_Y"},
						{"label": "Option Z", "value": "OPTION_Z"}
					]}
					break;
				default:
					return;
			}

			FieldService
				.createFieldForForm(model.formId, field)
				.then(function(fields) {
					model.fields = fields;
				});
		}

		function deleteField(field) {
			FieldService
				.deleteFieldFromForm(model.formId, field.id)
				.then(function(fields) {
					model.fields = fields;
				});
		}
	}
})();