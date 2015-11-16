//var module = angular.module("FormBuilderAppForms");
var q = require("q");

module.exports = function(app, model) {


	app.post("/api/assignment/user/:userId/form", createForm);
	app.get("/api/assignment/user/:userId/form", findAllForms);
	app.get("/api/assignment/form/:formId", findFormById);
	app.put("/api/assignment/form/:formId", updateForm);
	app.delete("/api/assignment/form/:formId", deleteForm);

	function createForm(req, res) {
        model
            .createForm(req.body)
            .then(function(forms) {
            	res.json(forms);
            });
    }

	function findAllForms(req, res) {
        model
            .findAllForms()
            .then(function(forms) {
            	res.json(forms);
            });
    }

	function findFormById(req, res) {
        model
            .findFormById(req.params.formId)
            .then(function(form) {
            	res.json(form);
            });
    }

	function updateForm(req, res) {
        model
            .updateForm(req.params.id, req.body)
            .then(function(forms) {
            	res.json(forms);
            });
    }


	function deleteForm(req, res) {
        model
            .deleteForm(req.params.id)
            .then(function(forms) {
            	res.json(forms)
            });
    }
    
};