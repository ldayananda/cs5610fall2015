module.exports = function(db) {
	var EducationSchema = new db.Schema(
		{
			name : String,
			degree: String,
			endDate: String,
			location: String,
			yearOfGraduation: String,
			description: String
		}, 
		{ collection : "cs5610.project.education" }
	);

	return EducationSchema;
}