'use strict';
var q = require("q");

module.exports = function(app) {
	var UserModel = require("./user.mock.js");

	var api = {
		findUserByCredentials : findUserByCredentials,
		findUserById : findUserById,
		updateUser : updateUser,
		updateJob : updateJob,
		updateSchool : updateSchool,
		createUser : createUser,
		addJob : addJob,
		addSchool : addSchool,
		addSkill : addSkill,
		addInterest : addInterest,
		findCurrentJob : findCurrentJob
	};
	return api;

	function findUserByCredentials(credentials) {
		var deferred = q.defer();

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user.username == credentials.username &&
				user.password == credentials.password) {

				deferred.resolve(user);
			}
		}

    	// otherwise return null
    	return deferred.promise;
	}

	function findUserById(userId) {
		var deferred = q.defer();

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				deferred.resolve(user);
			}
		}

    	// otherwise return null
    	return deferred.promise;
	}

	function updateUser(userId, newUser) {
		var deferred = q.defer();

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				user._id = newUser._id,
				user.firstName = newUser.firstName,
				user.lastName = newUser.lastName,
				user.username = newUser.username,
				user.password = newUser.password,
				user.location = newUser.location,
				user.profilePic = newUser.profilePic,
				user.industry = newUser.industry,
				user.bio = newUser.bio,
				user.skills = newUser.skills,
				user.interests = newUser.interests,
				user.age = newUser.age, 
				user.linkedin= newUser.linkedin,
				user.jobs = newUser.jobs,
				user.education = newUser.education

				deferred.resolve(user);
			}
		}

    	// otherwise return null
    	return deferred.promise;	
	}

	function updateJob(userId, jobId, newJob) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;
				
				for (var i in found_user.jobs) {
					var job = found_user.jobs[i];
					if (job._id == jobId) {
						job.title = newJob.title;
						job.company = newJob.company;
						job.location = newJob.location;
						job.description = newJob.description;

						user.jobs = found_user.jobs;
						deferred.resolve(found_user.jobs);
					}
				}
			}
		}

		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };



    	// otherwise return null
    	return deferred.promise;	
	}

	function updateSchool(userId, schoolId, newSchool) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;

				for (var i in found_user.education) {
					var school = found_user.education[i];
					if (school._id == schoolId) {
						school.name = newSchool.name;
						school.degree = newSchool.degree;
						school.location = newSchool.location;
						school.description = newSchool.description;
						school.yearOfGraduation = newSchool.yearOfGraduation;

						user.education = found_user.education;
						deferred.resolve(found_user.education);
					}
				}
			}
		}

		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };



    	// otherwise return null
    	return deferred.promise;	
	}

	function addJob(userId, newJob) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;

				var jobs;
				if (found_user.jobs == null) {
					jobs = [];
				} else {
					jobs = found_user.jobs;
				}

				var uuid = require('node-uuid');
				newJob._id = uuid.v1();

				jobs.push(newJob);
				found_user.jobs = jobs;
				deferred.resolve(found_user.jobs);
			}
		}

		// console.log("found user", found_user);
		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };

		

    	// otherwise return null
    	return deferred.promise;	
	}

	function addSchool(userId, newSchool) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;
				
				var education;
				if (found_user.education == null) {
					education = [];
				} else {
					education = found_user.education;
				}

				var uuid = require('node-uuid');
				newSchool._id = uuid.v1();

				education.push(newSchool);
				found_user.education = education;
				deferred.resolve(found_user.education);
			}
		}

		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };

    	// otherwise return null
    	return deferred.promise;	
	}

	function addSkill(userId, newSkill) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;
				
				var skills;
				if (found_user.skills == null) {
					skills = [];
				} else {
					skills = found_user.skills;
				}

				// var uuid = require('node-uuid');
				// newSkill._id = uuid.v1();

				skills.push(newSkill);
				found_user.skills = skills;
				deferred.resolve(found_user.skills);
			}
		}

		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };

    	// otherwise return null
    	return deferred.promise;	
	}

	function addInterest(userId, newInterest) {
		var deferred = q.defer();
		var found_user;

		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;
				
				var interests;
				if (found_user.interests == null) {
					interests = [];
				} else {
					interests = found_user.interests;
				}

				// var uuid = require('node-uuid');
				// newInterest._id = uuid.v1();

				interests.push(newInterest);
				found_user.interests = interests;
				deferred.resolve(found_user.interests);
			}
		}

		// if (found_user == null) {
		// 	deferred.reject("User " + userId + " was not found");
		// 	return deferred.promise;
		// };

    	// otherwise return null
    	return deferred.promise;	
	}

	function createUser(user) {
		var deferred = q.defer();

		var uuid = require('node-uuid');
		user._id = uuid.v1();

		UserModel.push(user);
		deferred.resolve(user);

		// otherwise return null
    	return deferred.promise;
	}

	function findCurrentJob(userId) {
		var deferred = q.defer();
		var found_user;

		console.log("in model, finding job");
		for (var i in UserModel) {
			var user = UserModel[i];
			if (user._id == userId) {
				found_user = user;
				
				var jobs;
				if (found_user.jobs == null) {
					deferred.reject("There are no jobs for this user");
				} else {
					jobs = found_user.jobs;
					console.log("found the right jobs ", jobs);
				

					for (var j in found_user.jobs) {
						var job = found_user.jobs[j];
						console.log("endDate ", job.endDate);

						// This is a current job
						if (job.endDate == null || job.endDate == "-" || job.endDate == "") {
							console.log("The job has been found");
							deferred.resolve(job);
						}
					}
				}
			}
		}

		// otherwise return null
    	return deferred.promise;
	}
}