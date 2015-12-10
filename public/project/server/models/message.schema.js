module.exports = function(db) {
	var statuses = ["unread", "read", "deleted"];
	var MessageSchema = new db.Schema(
		{
			powwow_id : db.Schema.Types.ObjectId,
			sender_id : db.Schema.Types.ObjectId,
			sender_name : String,
			sender_company : String,
			recepient_id : db.Schema.Types.ObjectId,
			status : {type: String, enum : statuses },
			sent : Date,
			msg_title : String,
			msg_body : String
		}, 
		{ collection : "cs5610.project.message" }
	);

	return MessageSchema;
}