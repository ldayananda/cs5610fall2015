//var module = angular.module("FormBuilderAppForms");
var q = require("q");

module.exports = function(app, model) {
	app.post("/api/assignment/form/:formId/field", createField);
	app.get("/api/assignment/form/:formId/field", findAllFields);
	app.get("/api/assignment/form/:formId/field/:fieldId", findFieldById);
	app.put("/api/assignment/form/:formId/field/:fieldId", updateField);
	app.delete("/api/assignment/form/:formId/field/:fieldId", deleteField);

	function createField(req, res) {
		model
            .createField(req.body, req.params.formId)
            .then(function(fields) {
            	res.json(fields);
            });
	}

	function findAllFields(req, res) {
		model
            .findAllFields(req.params.formId)
            .then(function(fields) {
            	res.json(fields);
            });
	}

	function findFieldById(req, res) {
		model
            .findFieldById(req.params.formId, req.params.fieldId)
            .then(function(field) {
            	res.json(field);
            });	
	}

	function updateField(req, res) {
		model
            .updateField(req.params.formId, req.params.fieldId, req.body)
            .then(function(fields) {
            	res.json(fields);
            });		
	}

	function deleteField(req, res) {
		model
            .deleteField(res.params.formId, res.params.id)
            .then(function(fields) {
            	res.json(fields);
            });		
	}
}