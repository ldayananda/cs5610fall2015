(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("FormController", FormController);

	function FormController($rootScope, $scope, $location, FormService) {

		$scope.addForm = addForm;
		$scope.updateForm = updateForm;	
		$scope.deleteForm = deleteForm;
		$scope.selectForm = selectForm;

		function addForm(form) {
			if (user == null) {
				return null;
			}

			// Don't add a form with the extact same data
			if ($.inArray(form, $scope.forms) == -1) {
				FormService.createFormForUser(user.id, form);
				$scope.forms.push(form);
				$scope.selectedFormIndex = null;
				$scope.selectedForm = null;
			}
		};

		function updateForm(form) {
			if (user == null) {
				return null;
			}
			var ind = $scope.selectedFormIndex;
			var formRef = $scope.selectedForm;
			FormService.updateFormById(formRef.id, formRef);
			$scope.forms[ind].name = form.name;
		}

		function deleteForm(index) {
			if (user == null) {
				return null;
			}
			var form = $scope.forms[index];
			FormService.deleteFormById(form.id);
			$scope.forms.splice(index, 1);
		}

		function selectForm(index) { 
			if ($scope.forms == null ) {
				return null;
			}

			$scope.selectedFormIndex = index;
			$scope.selectedForm = {
				name: $scope.forms[index].name,
				userId: $scope.forms[index].userId,
				id : $scope.forms[index].id
			};
		}

		var user = $rootScope.user;
		if (user != null) {
			$scope.forms = FormService.findAllFormsForUser(user.id);
		} else {
			$scope.forms = [];
		}
	}
})();