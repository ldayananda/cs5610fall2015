module.exports = function(db) {
	var types = ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"];
	var FieldSchema = new db.Schema(
	{
		_id : db.Schema.Types.ObjectId,
		label : String,
		fieldType : { type: String, enum : types },
		//used with RADIO, CHECKBOX, or SELECT
		options : [{
			label : String,
			value : String
		}], 
		placeholder : String // when type is TEXT
	});

	return FieldSchema;
}