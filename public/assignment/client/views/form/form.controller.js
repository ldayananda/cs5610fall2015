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
				.findAllFormsForUser($rootScope.user._id)
				.then(function(forms) {
					model.forms = forms;
				});
		}
		init();

		function addForm(form) {
			FormService
				.createFormForUser($rootScope.user._id, form)
				.then(function(forms) {
					// createFormForUser returns all forms
					model.forms = forms;
				});
		};

		function updateForm(form) {
			var ind = model.selectedFormIndex;
			var formRef = model.forms[ind];

			formRef.title = form.title;
			formRef.userId = form.userId;
			formRef.fields = form.fields;

			FormService
				.updateFormById(formRef._id, formRef)
				.then(function(forms) {

					// updateFormById returns all forms
					model.forms = forms;
				});
		}

		function deleteForm(index) {
			var form = model.forms[index];

			FormService
				.deleteFormById(form._id)
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
				_id : model.forms[index]._id,
				title : model.forms[index].title,
				userId : model.forms[index].userId,
				fields: model.forms[index].fields
			};
		}
	}
})();