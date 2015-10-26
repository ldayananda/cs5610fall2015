(function() {
	var app = angular.module("FormBuilderApp");
	app.controller("FormController", FormController);

	function FormController($rootScope, $scope, $location, FormService) {
		var user = $rootScope.user;
		if (user != null) {
			$scope.forms = FormService.findAllFormsForUser(user.id);
		} else {
			$scope.forms = [];
		}

		$scope.addForm = addForm;
		$scope.updateForm = updateForm;	
		$scope.deleteForm = deleteForm;
		$scope.selectForm = selectForm;

		function addForm(form) {
			if (user == null) {
				return null;
			}

			var form = FormService.createFormForUser(user.id, form);
			$scope.forms = FormService.findAllFormsForUser(user.id);
		};

		function updateForm(form) {
			if (user == null) {
				return null;
			}
			var form = FormService.updateFormById($scope.selectForm.id, form);
			$scope.forms = FormService.findAllFormsForUser(user.id);
		}

		function deleteForm(index) {
			$scope.forms = FormService.findAllFormsForUser(user.id);
			var allForms = $scope.forms;
			var forms = FormService.deleteFormById(allForms[index].id);
		}

		function selectForm(index) {//TODO finish this
			var allForms = $scope.forms;
			if (allForms != null ) {
				console.log("ind " + index);
				$scope.selectedForm = allForms[index];
				console.log($scope.selectedForm);
				$scope.form.name = allForms[index].name;
				console.log($scope.selectedForm.name);
			}
		}
	}
})();