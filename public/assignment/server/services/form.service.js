//var module = angular.module("FormBuilderAppForms");
var q = require("q");

module.exports = function(app, db, model) {
	app.post("/api/assignment/user/:userId/form", createForm);
	app.get("/api/assignment/user/:userId/form", findAllForms);
	app.get("/api/assignment/form/:formId", findFormById);
	app.put("/api/assignment/form/:formId", updateForm);
	app.delete("/api/assignment/form/:formId", deleteForm);

	function createForm(req, res) {
        var form = req.body;
        form.userId = req.param.userId;

        model
            .createForm(form)
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
            .updateForm(req.params.formId, req.body)
            .then(function(forms) {
            	res.json(forms);
            });
    }


	function deleteForm(req, res) {
        model
            .deleteForm(req.params.formId)
            .then(function(forms) {
            	res.json(forms)
            });
    }
    
};