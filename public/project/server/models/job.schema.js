module.exports = function(db) {
	var JobSchema = new db.Schema(
		{
			title : String,
			endDate : String,
			company : String,
			location : String,
			description : String
		}, 
		{ collection : "cs5610.project.job" }
	);

	return JobSchema;
}