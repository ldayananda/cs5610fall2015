module.exports = function(db) {
	var UserSchema = new db.Schema(
		{
			firstName: String,
			lastName: String,
			username: String,
			password: String,
			email: String
		}, 
		{ collection : "cs5610.assignment.user" }
	);

	return UserSchema;
}