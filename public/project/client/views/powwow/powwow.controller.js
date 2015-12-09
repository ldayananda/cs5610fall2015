'use strict';
(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("PowwowController", PowwowController);

	function PowwowController($rootScope, $location, PowwowService, UserService) {
		var model = this;
		model.location = $location;

		function init() {
			model.user = $rootScope.user;

			PowwowService
				.findAllMessagesReceived(model.user._id)
				.then(function(messages) {
					model.messages = messages;
				});

			PowwowService
				.findAllMessagesSent(model.user._id)
				.then(function(messages) {
					model.sent_messages = messages;
				});


		};
		init();
	}

})();