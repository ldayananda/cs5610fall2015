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
					model.powwowIds =  [];
					for (var i in model.messages) {
						model.powwowIds[i] = model.messages[i].powwow_id;
					}
				});

			PowwowService
				.findAllMessagesSent(model.user._id)
				.then(function(messages) {
					model.sent_messages = messages;
					model.sent_powwowIds =  [];
					for (var i in sent_messages) {
						model.sent_powwowIds[i] = model.sent_messages[i].powwow_id;
					}
				});
		};
		init();
	}

})();