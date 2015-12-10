(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("RegisterController", RegisterController);

	function RegisterController($location, $rootScope, UserService) {
		var model = this;

		model.location = $location;
		model.sendToNext = sendToNext;
		model.addJob = addJob;
		model.addSchool = addSchool;
		model.addSkill = addSkill;
		model.addInterest = addInterest;
		model.register = register;
		model.completeRegistration = completeRegistration;

		function init() {
			if ($rootScope.user != null) {
				model.user = $rootScope.user;
			}
		};
		init();

		function sendToNext(user) {
			console.log("sending to next", user);
			user.jobs = [];
			user.education = [];
			user.skills = [];
			user.interests = [];
			model.user = user;
			register(user);
			// model.user = user;
			// $rootScope.user = model.user;
			// model.location.path("/profileBuilder");
		}

		function register(user) {
			//var user = model.user;

			UserService
				.createUser(user)
				.then(function(user) {
					$rootScope.user = user;
					model.user = user;
					console.log("returned user", user);
					model.location.path("/profileBuilder");
					
				});
		}

		function completeRegistration() {
			var user = model.user;
			$rootScope.user = user;
			model.location.path("user/" + model.user._id + "/profile");
		}

		function addJob(job) {
			var user = model.user;

			console.log("in the controller add job to", user.jobs);
			UserService
				.addJob(user._id, job)
				.then(function(jobs) {
					console.log("Jobs added", model.user.jobs);
					model.user.jobs = jobs;
					model.location.path("/profileBuilder");
				});

			// if (model.user.jobs == null) {
			// 	model.user.jobs = [job];
			// } else {
			// 	console.log("Added job", job);
			// 	model.user.jobs.push(job);
			// 	console.log("Jobs added", model.user.jobs);
			// }
			// model.location.path("/profileBuilder");
		}

		function addSchool(school) {
			var user = model.user;

			UserService
				.addSchool(user._id, school)
				.then(function(schools) {
					console.log("Added school", school);
					model.user.education = schools;
					model.location.path("/profileBuilder");
				});

			// if (model.user.education == null) {
			// 	model.user.education = [school];
			// } else {
			// 	console.log("Added school", school);
			// 	model.user.education.push(school);
			// }
			// model.location.path("/profileBuilder");
		}

		function addSkill(skill) {
			var user = model.user;

			UserService
				.addSkill(user._id, skill)
				.then(function(skills) {
					model.user.skills = skills;
					model.location.path("/profileBuilder");
				});

			// if (model.user.skills == null) {
			// 	model.user.skills = [skill];
			// } else {
			// 	console.log('Added skill', skill);
			// 	model.user.skills.push(skill);
			// }
			// model.location.path("/profileBuilder");

		}

		function addInterest(interest) {
			var user = model.user;

			UserService
				.addInterest(user._id, interest)
				.then(function(interests) {
					model.user.interests = interests;
					model.location.path("/profileBuilder");
				});

			// if (model.user.interests == null) {
			// 	model.user.interests = [interest];
			// } else {
			// 	console.log("Added interest", interest);
			// 	model.user.interests.push(interest);
			// }

			// model.location.path("/profileBuilder");
		}
	}
})();