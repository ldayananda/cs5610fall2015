var module = angular.module("FormBuilderAppForms");

module.exports = function(app) {
	var forms = [];
	var api = {
        createForm : createForm,
        findAllForms : findAllForms,
        findFormsById : findFormsById,
        updateForms : updateForms,
        deleteForms : deleteForms,
        findFormByTitle: findFormByTitle
    };
    return api;

    function createForm(form) {
        // add FormId
        // TODO?
    	// add to current collection
    	forms.push(form);
    	// return collection
    	return forms;
    }

    function findAllForms() {
    	// return collection
    	return forms;
    }

    function findFormsById(formId) {
    	// find the object in the collection with id formId
    	var len = forms.length;
		for (i = 0; i < len; i++) {
			if (forms[i].id == formId) {
		    	// return the matching element, if found
				return forms[i];
			}
		}

    	// return null otherwise
    	return null;
    }

    function updateForms(formId, newForm) {
    	// find the object in the collection with id formId
    	var len = forms.length;
		for (i = 0; i < len; i++) {
			if (forms[i].id == formId) {
				var form = forms[i];
		    	// update found form with newForm's property values
				form.id = newForm.id;
				form.title = newForm.title;
				form.userId = newForm.userId;
				form.fields = newForm.fields;
			}
		}

    	// return all objects
        return forms;
    }

    function deleteForms(formId) {
    	// find the object in the collection with id formId
    	var len = forms.length;
		for (i = 0; i < len; i++) {
			if (forms[i].id == formId) {
		    	// remove the matching instance
		    	forms.splice(i, 1);
			}
		}

        return forms;
    }

    function findFormByTitle(title) {
    	// find form in collection whose title is title
    	var len = forms.length;
		for (i = 0; i < len; i++) {
			if (forms[i].title == title) {
		    	// returns matching object, if found
		    	return forms[i];
			}
		}

    	// otherwise returns null
    	return null;	
    }
}