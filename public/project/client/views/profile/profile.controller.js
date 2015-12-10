(function () {
	var app = angular.module("JobHuntingApp");
	app.controller("ProfileController", ProfileController);

	function ProfileController($location, UserService, $rootScope) {
		var model = this;

		model.location = $location;
		model.update = update;
		model.addSkill = addSkill;
		model.addJob = addJob;
		model.updateJob = updateJob;
		model.addSchool = addSchool;
		model.updateSchool = updateSchool;
		model.addInterest = addInterest;
		model.updateSkills = updateSkills

		function init() {
			model.user = $rootScope.user;
			console.log("general user", model.user);
		};
		init();

		function update(user) {
			var newUser = {
				_id : user._id,
				firstName : user.firstName,
				lastName : user.lastName,
				username : user.username,
				password : user.password,
				location : user.location,
				profilePic : user.profilePic,
				industry : user.industry,
				bio : user.bio,
				skills : user.skills,
				interests : user.interests,
				age : user.age, 
				linkedin: user.linkedin,
				jobs : user.jobs,
				education : user.education
			};

			UserService
			.updateUser(user._id, newUser)
			.then(function(user) {
				model.user = user;
				model.location.path("/user/" + user._id + "/profile");
			});
		}

		function addSkill(skill) {
			var user = model.user;
			console.log(skill);

			UserService
				.addSkill(user._id, skill)
				.then(function(skills) {
					model.user.skills = skills;
					user.skills = skills;
					console.log("got added user skills", skills);
					// model.location.path("/user/" + user._id + "/profile");
				});

		}

		function updateSkills(skills) {
			var user = model.user;
			console.log(skills, "current", user.skills);
			// user.skills = skills;

			// UserService
			// 	.updateUser(user._id, user)
			// 	.then(function(user) {
			// 		model.user = user;
			// 	});

			UserService
				.updateSkills(user._id, skills)
				.then(function(skills) {
					console.log("got updated user skills", skills);
					user.skills = skills;
					console.log(user.skills);
					// model.location.path("/user/" + user._id + "/profile");
				}
			);

		}

		function addInterest(interest) {
			var user = model.user;
			console.log(interest);

			UserService
				.addInterest(user._id, interest)
				.then(function(interests) {
					model.user.interests = interests;
					user.interests = interests;
					console.log("got added user interests", interests);
					// model.location.path("/user/" + user._id + "/profile");
				});
		}

		function updateInterests(interests) {
			var user = model.user;
			// user.interests = interests;

			// UserService
			// 	.updateUser(user._id, user)
			// 	.then(function(user) {
			// 		model.user = user;
			// 	});


			UserService
				.updateInterests(user._id, interests)
				.then(function(interests) {
					console.log("got updated user interests", interests);
					user.interests = interests;
					console.log(user.interests);
					// model.location.path("/user/" + user._id + "/profile");
				}
			);
		}

		function addJob(job) {
			var user = model.user;

			UserService
				.addJob(user._id, job)
				.then(function(jobs) {
					model.user.jobs = jobs;
					model.location.path("/user/" + user._id + "/profile");
				});
		}

		function updateJob(job) {
			var user = model.user;
			console.log("job", job);

			UserService
				.updateJob(user._id, job._id, job)
				.then(function(jobs) {
					console.log("got jobs back", jobs);
					model.user.jobs = jobs;
				});
		}

		function addSchool(school) {
			var user = model.user;

			UserService
				.addSchool(user._id, school)
				.then(function(schools) {
					model.user.education = schools;
					model.location.path("/user/" + user._id + "/profile");
				});
		}

		function updateSchool(school) {
			var user = model.user;
			console.log("school", school);

			UserService
				.updateSchool(user._id, school._id, school)
				.then(function(schools) {
					console.log("got schools back", schools);
					model.user.education = schools;
				});
		}
	}
})();