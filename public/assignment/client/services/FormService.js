(function () {
	var app = angular.module("FormBuilderApp");

	app.factory("FormService", FormService);

	function FormService($http, $q) {
		var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };
        return service;

		function createFormForUser(userId, form) {
			var deferred = $q.defer();

			$http
				.post("/api/assignment/user/" + userId + "/form", form)
				.success(function(response) {

					deferred.resolve(response);
				})

			return deferred.promise;
			// var guid = Guid.create();
			// form.id = guid;
			// form.userid = userId;
			// forms.push(form);
			// return form;
		}

		function findAllFormsForUser(userId) {
			var deferred = $q.defer();

			$http
				.get("/api/assignment/user/" + userId + "/form")
				.success(function(response) {
					deferred.resolve(response);
				})
				
			return deferred.promise;
			// var found = [];

			// var i;
			// var len = forms.length;
			// for (i = 0; i < len; i++) {
			// 	if (forms[i].userid == userId) {
			// 		found.push(forms[i]);
			// 	}
			// }

			// return found;
		}

		function deleteFormById(formId) {
			var deferred = $q.defer();

			$http
				.delete("/api/assignment/form/" + formId)
				.success(function(response) {
					deferred.resolve(response);
				})
				
			return deferred.promise;
			// var i;
			// var len = forms.length;

			// for (i = 0; i < len; i++) {
			// 	var elem = forms[i];
			// 	if (elem != null && elem.id == formId) {
			// 		forms.splice(i, 1);
			// 	}
			// }

			// return forms;
		}

		function updateFormById(formId, newForm) {
			var deferred = $q.defer();

			$http
				.put("/api/assignment/form/" + formId, newForm)
				.success(function(response) {
					deferred.resolve(response);
				})
				
			return deferred.promise;
			// var i;
			// var len = forms.length;
			// for (i = 0; i < len; i++) {
			// 	if (forms[i].id = formId) {
			// 		forms[i].userid = newForm.userid;
			// 		return forms[i];
			// 	}
			// }

			// return null;
		}
	}

})();