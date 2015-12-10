module.exports = function(db) {
	var MessageSchema = require("./message.schema.js")(db);

	var PowwowSchema = new db.Schema(
		{
			userIds : [db.Schema.Types.ObjectId],
			messages : [MessageSchema]
		}, 
		{ collection : "cs5610.project.powwow" }
	);

	return PowwowSchema;
}