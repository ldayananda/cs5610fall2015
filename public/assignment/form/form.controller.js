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

			var form = FormService.createFormForUser(user.id, form);
			$rootScope.forms.push(form);
			//$scope.forms = FormService.findAllFormsForUser(user.id);
		};

		function updateForm(form) {
			if (user == null) {
				return null;
			}
			//console.log("update " + $scope.selectedFormIndex);
			//console.log($scope.selectedForm);
			//var form = FormService.updateFormById($scope.selectedForm.id, form);
			//$scope.forms = FormService.findAllFormsForUser(user.id);
			// console.log($scope.forms);
			// console.log($scope.forms[$scope.selectedFormIndex]);
			// console.log(form.name);
			$scope.forms[$scope.selectedFormIndex].name = form.name;
			// console.log("after");
			// console.log($scope.forms);
		}

		function deleteForm(index) {
			$scope.forms = FormService.findAllFormsForUser(user.id);
			var allForms = $scope.forms;
			$scope.forms.splice(index, 1);
			var forms = FormService.deleteFormById(allForms[index].id);
			$rootScope.forms = forms;
		}

		function selectForm(index) {//TODO finish this
			var allForms = $scope.forms;
			if (allForms != null ) {
				//console.log("ind " + index);
				$rootScope.selectedFormIndex = index;
				//console.log($scope.selectedFormIndex);
				$rootScope.selectedForm = allForms[index];
				//console.log($scope.selectedForm.name);
			}
		}

		var user = $rootScope.user;
		if (user != null) {
			$scope.forms = FormService.findAllFormsForUser(user.id);
		} else {
			$scope.forms = [];
		}
	}
})();