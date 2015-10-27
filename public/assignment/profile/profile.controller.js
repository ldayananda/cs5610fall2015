(function () {
	var app = angular.module("FormBuilderApp");

	app.controller("ProfileController", ProfileController);

	function ProfileController($rootScope, $scope, UserService) {
		$scope.update = update;

		function update(user) {
			var newUser = {
				username : user.username,
				 userPassword : user.password,
				 userFirstName : user.fname,
				 userLastName : user.lname,
				 userEmail : user.email
			}

			return UserService.updateUser($scope.user, newUser);
		}

		var currUser = $rootScope.user;
		if (currUser != null) {
			$scope.user = currUser;

			$scope.user.username  = currUser.username;
			$scope.user.password  = currUser.password;
			$scope.user.fname  = currUser.fname;
			$scope.user.lname  = currUser.lname;
			$scope.user.email  = currUser.email;
		}
	} 
})();