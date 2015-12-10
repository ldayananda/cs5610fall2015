module.exports = function(db) {
	var roles = ["applicant", "recruiter"];

	var JobSchema = require("./job.schema.js")(db);
	var EducationSchema = require("./education.schema.js")(db);
	var UserSchema = new db.Schema(
		{
			role : { type: String, enum : roles },
			firstName: String,
			lastName: String,
			username: String,
			password: String,
			location : {
				city: String,
				state : String,
				country: String
			},
			profilePic: String,
			industry: String,
			bio: String,
			skills: [
				{ 
					value : String,
					_id : db.Schema.Types.ObjectId
				}
			],
			//{ type : Array , "default" : [] },
			
			interests: [
				{ 
					value : String,
					_id : db.Schema.Types.ObjectId
				}
			],
			age: String,
			linkedin : {
				url : String
			},
			jobs : [JobSchema],
			education: [EducationSchema]
		}, 
		{ collection : "cs5610.project.user" }
	);

	return UserSchema;
}