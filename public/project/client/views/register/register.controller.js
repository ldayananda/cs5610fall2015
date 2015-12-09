(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("RegisterController", RegisterController);

	function RegisterController($location, $rootScope, UserService) {
		var model = this;

		model.location = $location;
		model.registerAndSendToNext = registerAndSendToNext;
		model.addJob = addJob;
		model.addSchool = addSchool;
		model.addSkill = addSkill;
		model.addInterest = addInterest;

		function init() {
			if ($rootScope.user != null) {
				model.user = $rootScope.user;
			}
		};
		init();

		function registerAndSendToNext(user) {
			UserService
				.createUser(user)
				.then(function(user) {
					$rootScope.user = user;
					model.user = user;
					model.location.path("/profileBuilder");
				});
		}

		function addJob(job) {
			var user = model.user;

			UserService
				.addJob(user._id, job)
				.then(function(jobs) {
					model.user.jobs = jobs;
					model.location.path("/profileBuilder");
				});

			// if (model.user.jobs == null) {
			// 	model.user.job = [];
			// } else {
			// 	model.user.jobs.push(job);
			// }

		}

		function addSchool(school) {
			var user = model.user;

			UserService
				.addSchool(user._id, school)
				.then(function(schools) {
					model.user.education = schools;
					model.location.path("/profileBuilder");
				});

			// if (model.user.education == null) {
			// 	model.user.education = [];
			// } else {
			// 	model.user.education.push(school);
			// }
		}

		function addSkill(skill) {
			var user = model.user;

			UserService
				.addSkill(user._id, skill)
				.then(function(skills) {
					model.user.skills = skills;
					model.location.path("/profileBuilder");
				});
		}

		function addInterest(interest) {
			var user = model.user;

			UserService
				.addInterest(user._id, interest)
				.then(function(interests) {
					model.user.interests = interests;
					model.location.path("/profileBuilder");
				});
		}
	}
})();