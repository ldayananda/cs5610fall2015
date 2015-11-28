(function () {
	var app = angular.module("FormBuilderApp");

	app.controller("ProfileController", ProfileController);

	function ProfileController($rootScope, $location, UserService) {
		var model = this;

		model.update = update;

		function init() {
			var currUser = $rootScope.user;
			if (currUser != null) {
				model.user = currUser;
			}
		}
		init();

		function update(user) {

			var newUser = {
				id : user._id,
				username : user.username,
				password : user.password,
				firstName : user.firstName,
				lastName : user.lastName,
				email : user.email
			}

			UserService
				.updateUser(user._id, newUser)
				.then(function(users) {

					model.users = users;
					$location.path("/profile");
				})
		}
	} 
})();