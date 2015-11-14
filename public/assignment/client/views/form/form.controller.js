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
			// if (user == null) {
			// 	return null;
			// }

			// // Don't add a form with the extact same data
			// if ($.inArray(form, model.forms) == -1) {
			// 	FormService.createFormForUser(user.id, form);
			// 	model.forms.push(form);
			// 	model.selectedFormIndex = null;
			// 	model.selectedForm = null;
			// }
		};

		function updateForm(form) {
			var ind = model.selectedFormIndex;
			var formRef = model.selectedForm;

			FormService
				.updateFormById(formRef.id, form)
				.then(function(forms) {
					// updateFormById returns all forms
					model.forms = forms;
				});
			// if (user == null) {
			// 	return null;
			// }

			// FormService.updateFormById(formRef.id, formRef);
			// model.forms[ind].name = form.name;
		}

		function deleteForm(index) {
			var form = model.forms[index];

			FormService
				.deleteFormById(form.id)
				.then(function(forms) {
					model.forms = forms;
				});

			// if (user == null) {
			// 	return null;
			// }
			// var form = model.forms[index];
			// FormService.deleteFormById(form.id);
			// model.forms.splice(index, 1);
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

		var user = $rootScope.user;
		if (user != null) {
			model.forms = FormService.findAllFormsForUser(user.id);
		} else {
			model.forms = [];
		}
	}
})();