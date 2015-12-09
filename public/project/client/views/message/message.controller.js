'use strict';
(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("MessageController", MessageController);

	function MessageController($rootScope, $routeParams, $location, PowwowService) {
		var model = this;
		model.location = $location;
		// model.delete = delete;
		// model.read = read;
		// model.unread = unread;

		function init() {
			model.user = $rootScope.user;

			model.powwowId = $routeParams.powwowId
			model.messageId = $routeParams.messageId

			PowwowService
				.findMessageById(model.powwowId, model.messageId)
				.then(function(message) {
					model.message = message;
					console.log("messages", model.message);
				});
		};
		init();
	}

})();