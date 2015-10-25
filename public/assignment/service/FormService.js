(function () {
	var app = angular.module("FormBuilderApp");

	app.factory("FormService", FormService);

	function FormService() {
		var forms = [];

		var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };
        return service;

		function createFormForUser(userId, form) {
			form.id = guid();
			form.userid = userId;
			forms.push(form);
			return form;
		}

		function findAllFormsForUser(userId) {
			var found = [];

			var i;
			var len = forms.length;
			for (i = 0; i < len; i++) {
				if (forms[i].userid == userId) {
					found.push(forms[i]);
				}
			}

			return found;
		}

		function deleteFormById(formId) {
			var i;
			var len = forms.length;
			console.log(forms);

			for (i = 0; i < len; i++) {
				console.log(forms[i]);
				if (forms[i].id == formId) {
					forms.splice(i, 1);
				}
			}

			return forms;
		}

		function updateFormById(formId, newForm) {
			var i;
			var len = forms.length;
			for (i = 0; i < len; i++) {
				if (forms[i].id = formId) {
					forms[i].userid = newForm.userid;
					return forms[i];
				}
			}

			return null;
		}

		function guid() {
  			function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
			}

	    	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    	s4() + '-' + s4() + s4() + s4();
		}

	}

})();