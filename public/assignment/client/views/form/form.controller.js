(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("FormController", FormController);

	function FormController($rootScope, $location, FormService) {
		var model = this;

		model.addForm = addForm;
		model.updateForm = updateForm;	
		model.deleteForm = deleteForm;
		model.selectForm = selectForm;

		function init() {
			var user = $rootScope.user;
			if (user == null) {
				model.forms = [];
			}

			FormService
				.findAllFormsForUser($rootScope.user.id)
				.then(function(forms) {
					model.forms = forms;
				});
		}
		init();

		function addForm(form) {
			FormService
				.createFormForUser($rootScope.user.id, form)
				.then(function(forms) {
					// createFormForUser returns all forms
					model.forms = forms;
				});
		};

		function updateForm(form) {
			var ind = model.selectedFormIndex;
			var formRef = model.forms[ind];

			formRef.title = form.title;
			console.log("Sending %j to server", formRef);

			FormService
				.updateFormById(formRef.id, formRef)
				.then(function(forms) {
					console.log("controller res %j", forms[ind]);

					// updateFormById returns all forms
					model.forms = forms;
				});
		}

		function deleteForm(index) {
			var form = model.forms[index];

			FormService
				.deleteFormById(form.id)
				.then(function(forms) {
					model.forms = forms;
				});
		}

		function selectForm(index) { 
			if (model.forms == null ) {
				return null;
			}

			model.selectedFormIndex = index;
			model.selectedForm = {
				id : model.forms[index].id,
				title : model.forms[index].title,
				userId : model.forms[index].userId,
				fields: model.forms[index].fields
			};
		}
	}
})();