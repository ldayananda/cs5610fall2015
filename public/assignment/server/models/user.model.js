//var module = angular.module("FormBuilderAppUsers");
var q = require("q");

module.exports = function(app, db) {
    //     var users = module.exports = 
    // [
    //     {"id": 123, "firstName": "Alice",   "lastName": "Wonderland",   "username": "alice",    "password": "alice"},
    //     {"id": 234, "firstName": "Bob", "lastName": "Hope",         "username": "bob",  "password": "bob"},
    //     {"id": 345, "firstName": "Charlie", "lastName": "Brown",        "username": "charlie", "password": "charlie"},
    //     {"id": 456, "firstName": "Dan", "lastName": "Craig",        "username": "dan",  "password": "dan"},
    //     {"id": 567, "firstName": "Edward",  "lastName": "Norton", "username": "ed", "password": "ed"}
    // ];

    var UserSchema = require("./user.schema.js")(db);
    // console.log(UserSchema);
    var UserModel = db.model("UserModel", UserSchema);
    
    var api = {
        createUser : createUser,
        findAllUsers : findAllUsers,
        findUserById : findUserById,
        updateUser : updateUser,
        deleteUser : deleteUser,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials
    };
    return api;

    function createUser(user) {
        var deferred = q.defer();

        UserModel.create(user, function(err, user) {
            if (err != null) {
                console.log(err);
            }

            // Find and return users
            UserModel.find(function(err, users) {
                deferred.resolve(users);
            });
        });

        // return collection
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        UserModel.find(function(err, users) {
            // return collection
            deferred.resolve(users);

        });
        return deferred.promise;
    }

    function findUserById(userId) {
        var deferred = q.defer();

        UserModel.findOne({ _id : userId}, function(err, user) {
            deferred.resolve(user);
        });


    	// find the object in the collection with id userId
        //   	var len = users.length;
		// for (i = 0; i < len; i++) {
		// 	if (users[i].id == userId) {
		//     	// return the matching element, if found
		// 		deferred.resolve(users[i]);
		// 	}
		// }

    	return deferred.promise;
    }

    function updateUser(userId, newUser) {
        var deferred = q.defer();

        UserModel.findOneAndUpdate(
            { _id : userId }, 
            newUser, 
            function(err, data) {
                if (err != null) {
                    console.log(err);
                }

                UserModel.find(function(err, users) {
                    deferred.resolve(users);
                })
            }
        );

    	// return all objects
        return deferred.promise;
    }

    function deleteUser(userId) {
        var deferred = q.defer();


        UserModel.remove(
            { _id : userId }, 
            function(err, data) {
                if (err != null) {
                    console.log(err);
                }

                UserModel.find(function(err, users) {
                    deferred.resolve(users);
                });
            }
        );

  //   	// find the object in the collection with id userId
  //   	var len = users.length;
		// for (i = 0; i < len; i++) {
		// 	if (users[i].id == userId) {
		//     	// remove the matching instance
		//     	users.splice(i, 1);
		// 	}
		// }
        
  //       deferred.resolve(users);
        //return all users
        return deferred.promise;
    }

    function findUserByUsername(username) {
        var deferred = q.defer();


        UserModel.findOne({ username : username }, function(err, user) {
            res.json(data);
            deferred.resolve(user);
        });

  //   	// find the object with username value username
  //   	var len = users.length;
		// for (i = 0; i < len; i++) {
		// 	if (users[i].username == username) {
		//     	// return the matching object, if found
		//     	deferred.resolve(users[i]);
		// 	}
		// }

    	return deferred.promise;
    }

    function findUserByCredentials(credentials) {
        var deferred = q.defer();

        UserModel.findOne(
            { username : credentials.username, password : credentials.password }, 
            function(err, user) {
                deferred.resolve(user);
            }
        );

    	// otherwise return null
    	return deferred.promise;
    }
}