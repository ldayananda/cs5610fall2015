module.exports = function(db) {
	var FieldSchema = require("./field.schema.js")(db);

	var FormSchema = new db.Schema(
		{
			title : String,
			userId : String, //db.Schema.Types.ObjectId,
			fields : [FieldSchema]
		}, 
		{collection : "cs5610.assignment.form"}
	);

	return FormSchema;
}