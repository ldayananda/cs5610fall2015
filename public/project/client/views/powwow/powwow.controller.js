'use strict';
(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("PowwowController", PowwowController);

	function PowwowController($rootScope, $location, PowwowService, UserService) {
		var model = this;
		model.location = $location;

		function init() {
			model.user = $rootScope.user;
			model.completed_msgs = [];

			PowwowService
				.findAllMessagesReceived(model.user._id)
				.then(function(messages) {
					model.completed_msgs = messages;
					model.messages = messages;
				});
		};
		init();
	}

})();