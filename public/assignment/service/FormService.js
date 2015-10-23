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

		function createFormForUser(userId, form, callback) {
			form.id = guid();
			form.userid = userId;
			forms.push(form);
			callback(form);
		}

		function findAllFormsForUser(userId, callback) {
			var found = [];

			var i;
			var len = forms.length();
			for (i = 0; i < len; i++) {
				if (forms[i].userid == userId) {
					found.push(forms[i]);
				}
			}

			callback(found);
		}

		function deleteFormById(formId, callback) {
			var i;
			var len = forms.length();
			for (i = 0; i < len; i++) {
				if (forms[i].id == formId) {
					forms.splice(i, 1);
				}
			}

			callback(forms);
		}

		function updateFormById(formId, newForm, callback) {
			var i;
			var len = forms.length();
			for (i = 0; i < len; i++) {
				if (forms[i].id = formId) {
					forms[i].userid = newForm.userid;
					callback(forms[i]);
				}
			}

			callback(null);
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