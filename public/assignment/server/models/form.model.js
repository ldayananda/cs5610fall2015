//var module = angular.module("FormBuilderAppForms");
var q = require("q");

module.exports = function(app, db) {
    // var forms = require("form.mock.json");
    //     var forms = module.exports = 
    // [
    //     {"id": "000", "title": "Contacts", "userId": 123,
    //         "fields": [
    //             {"id": "111", "label": "First Name", "type": "TEXT", "placeholder": "First Name"},
    //             {"id": "222", "label": "Last Name", "type": "TEXT", "placeholder": "Last Name"},
    //             {"id": "333", "label": "Address", "type": "TEXT", "placeholder": "Address"},
    //             {"id": "444", "label": "State", "type": "OPTIONS", "options": [
    //                 {"label": "Massachussets", "value": "MA"},
    //                 {"label": "New Hampshire", "value": "NH"}
    //             ]},
    //             {"id": "555", "label": "ZIP", "type": "TEXT", "placeholder": "ZIP"},
    //             {"id": "666", "label": "Email", "type": "EMAIL", "placeholder": "Email"}
    //         ]
    //     },
    //     {"id": "010", "title": "ToDo", "userId": 234,
    //         "fields": [
    //             {"id": "777", "label": "Title", "type": "TEXT", "placeholder": "Title"},
    //             {"id": "888", "label": "Description", "type": "TEXTAREA", "placeholder": "Title"},
    //             {"id": "999", "label": "Due Date", "type": "DATE"}
    //         ]
    //     }
    // ];
    var FormSchema = require("./form.schema.js")(db);
    var FormModel = db.model("FormModel", FormSchema);
    
	var api = {
        createForm : createForm,
        findAllForms : findAllForms,
        findFormById : findFormById,
        updateForm : updateForm,
        deleteForm : deleteForm,
        findFormByTitle: findFormByTitle,
        createField : createField,
        findAllFields : findAllFields,
        findFieldById : findFieldById,
        updateField : updateField,
        deleteField : deleteField
    };
    return api;

    function createForm(form) {
        var deferred = q.defer();

        FormModel.create(form, function(err, data) {
            if (err != null) {
                console.log(err);
            }

            FormModel.find(function(err, forms) {
                deferred.resolve(forms);
            });
        });

     //    // add FormId
     //    var uuid = require('node-uuid');
     //    form.id = uuid.v1();
    	// // add to current collection
    	// forms.push(form);

    	// // return collection
     //    deferred.resolve(forms);
    	return deferred.promise;
    }

    function findAllForms() {
        var deferred = q.defer();
                
        FormModel.find(function(err, forms) {
            if (err != null) {
                console.log(err);
            }
            
            deferred.resolve(forms);
        });


    	// return collection
    	// deferred.resolve(forms);
        return deferred.promise;
    }

    function findFormById(formId) {
        var deferred = q.defer();

        FormModel.findOne(
            { _id : req.params.formId }, 
            function(err, form) {
                deferred.resolve(form);
            }
        );

  //   	// find the object in the collection with id formId
  //   	var len = forms.length;
		// for (i = 0; i < len; i++) {
		// 	if (forms[i].id == formId) {
  //               var form = forms[i];
		//     	// return the matching element, if found
		// 		deferred.resolve(form);
		// 	}
		// }

    	// return null otherwise
    	return deferred.promise;
    }

    function updateForm(formId, newForm) {
        var deferred = q.defer();

        FormModel.findOneAndUpdate(
            {_id : formId },
            newForm, 
            function(err, data) {
                FormModel.find(function(err, forms) {
                    deferred.resolve(forms);
                });
            }
        );

  //   	// find the object in the collection with id formId
  //   	var len = forms.length;
		// for (i = 0; i < len; i++) {

		// 	if (forms[i].id == formId) {
		// 		var form = forms[i];
		//     	// update found form with newForm's property values
		// 		form.id = newForm.id;
		// 		form.title = newForm.title;
		// 		form.userId = newForm.userId;
		// 		form.fields = newForm.fields;
		// 	}
		// }

  //   	// return all objects
  //       deferred.resolve(forms);
        return deferred.promise;
    }

    function deleteForm(formId) {
        var deferred = q.defer();

        FormModel.remove( 
            { _id : formId }, 
            function(err, results) {
                if (err != null) {
                    console.log(err);
                }

                FormModel.find(function(err, forms) {
                    deferred.resolve(forms);
                });
            }
        );

  //   	// find the object in the collection with id formId
  //   	var len = forms.length;
		// for (i = 0; i < len; i++) {
		// 	if (forms[i].id == formId) {
		//     	// remove the matching instance
		//     	forms.splice(i, 1);
		// 	}
		// }

  //       deferred.resolve(forms);
        return deferred.promise;
    }

    function findFormByTitle(title) {
        var deferred = q.defer();

        var title = req.query.title;


        FormModel.findOne(
            { title : title },
            function(err, form) {
                deferred.resolve(form);
            }
        );


  //   	// find form in collection whose title is title
  //   	var len = forms.length;
		// for (i = 0; i < len; i++) {
		// 	if (forms[i].title == title) {
		//     	// returns matching object, if found
		//     	deferred.resolve(forms[i]);
		// 	}
		// }

    	// otherwise returns null
    	return deferred.promise;	
    }

    function createField(field, formId) {
        var deferred = q.defer();

        // add fieldId
        var uuid = require('node-uuid');
        field.id = uuid.v1();

        // add to form's collection
        var form = api
            .findFormById(formId)
            .then(function(form) {
                var fields = pushField(field, form);
                deferred.resolve(fields);
            });
        
        // return collection
        return deferred.promise;
    }

    function findAllFields(formId) {
        var deferred = q.defer();

        // get collection
        var form = api
            .findFormById(formId)
            .then(function(form) {
                var fields = getFields(form);
                deferred.resolve(fields);
            });

        // return collection
        return deferred.promise;
    }

    function findFieldById(formId, id) {
        var deferred = q.defer();

        // get collection
        var form = api
            .findFormById(formId)
            .then(function (form) {
                var fields = getFields(form);

                // find field in collection whose id is id
                var len = fields.length;
                for (i = 0; i < len; i++) {
                    if (fields[i].id == id) {
                        var field = fields[i];
                        // returns matching object, if found
                        deferred.resolve(field);
                    }
                }
            });
        
        return deferred.promise;
    }

    function updateField(formId, id, newField) {
        var deferred = q.defer();

        // get collection
        var form = api
            .findFormById(formId)
            .then(function (form) {
                var fields = getFields(form);

                // find field in collection whose id is id
                var len = fields.length;
                for (i = 0; i < len; i++) {
                    if (fields[i].id == id) {

                        var field = fields[i];
                        field.id = newField.id;
                        field.label = newField.label;
                        field.type = newField.type;
                        field.placeholder = newField.placeholder;
                        field.options = newField.options;

                        deferred.resolve(field);
                    }
                }
            });
        
        return deferred.promise;
    }

    function deleteField(formId, id) {
        var deferred = q.defer();

        // get collection
        var form = api
            .findFormById(formId)
            .then(function(form) {
                var fields = getFields(form);

                // find field in collection whose id is id
                var len = fields.length;
                for (i = 0; i < len; i++) {
                    if (fields[i].id == id) {
                        fields.splice(i, 1);

                        // returns remaining fields
                        deferred.resolve(fields);
                    }
                }              
            });
        
        return deferred.promise;     
    }

    function pushField(field, form) {
        if (!form.fields) {
            form.fields = [];
        }
        form.fields.push(field);

        return form.fields;
    }

    function getFields(form) {
        if (!form.fields) {
            form.fields = [];
        }
        return form.fields;
    }
}