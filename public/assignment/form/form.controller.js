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
		console.log("initial forms");
		console.log($scope.forms);

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
			console.log($scope.forms);
		};

		function updateForm(form) {
			if (user == null) {
				return null;
			}
			var form = FormService.updateFormById($scope.selectForm.id, form);
			$scope.forms = FormService.findAllFormsForUser(user.id);
		}

		function deleteForm(index) { //TODO finish this 
			console.log(index);
			$scope.forms = FormService.findAllFormsForUser(user.id);
			var allForms = $scope.forms;
			console.log("i think ? ");
			console.log(allForms[index]);
			console.log(allForms[index].id);
			var forms = FormService.deleteFormById(allForms[index].id);
		}

		function selectForm(index) {//TODO finish this
			var allForms = $scope.forms;
			if (allForms != null ) {
				$scope.selectedForm = allForms[index];
				$scope.form.name = $scope.selectedForm.name;
			}
		}
	}
})();