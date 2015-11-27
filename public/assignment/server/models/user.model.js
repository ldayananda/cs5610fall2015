//var module = angular.module("FormBuilderAppUsers");
var q = require("q");

module.exports = function(app, db) {
    // var users = require("user.mock.json");
    var users = module.exports = 
[
    {"id": 123, "firstName": "Alice",   "lastName": "Wonderland",   "username": "alice",    "password": "alice"},
    {"id": 234, "firstName": "Bob", "lastName": "Hope",         "username": "bob",  "password": "bob"},
    {"id": 345, "firstName": "Charlie", "lastName": "Brown",        "username": "charlie", "password": "charlie"},
    {"id": 456, "firstName": "Dan", "lastName": "Craig",        "username": "dan",  "password": "dan"},
    {"id": 567, "firstName": "Edward",  "lastName": "Norton", "username": "ed", "password": "ed"}
];
    
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

        var uuid = require('node-uuid');
        user.id = uuid.v1();

    	// add to current collection
    	users.push(user);

        deferred.resolve(users);
    	// return collection
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

    	// return collection
        deferred.resolve(users);
    	return deferred.promise;
    }

    function findUserById(userId) {
        var deferred = q.defer();

    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
		    	// return the matching element, if found
				deferred.resolve(users[i]);
			}
		}

    	return deferred.promise;
    }

    function updateUser(userId, newUser) {
        var deferred = q.defer();



    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
				var user = users[i];

		    	// update found user with newUser's property values
				user.firstName = newUser.firstName;
				user.lastName = newUser.lastName;
				user.username = newUser.username;
				user.password = newUser.password;
                user.email = newUser.email;
			}
		}

        deferred.resolve(users);
    	// return all objects
        return deferred.promise;
    }

    function deleteUser(userId) {
        var deferred = q.defer();

    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
		    	// remove the matching instance
		    	users.splice(i, 1);
			}
		}
        
        deferred.resolve(users);
        //return all users
        return deferred.promise;
    }

    function findUserByUsername(username) {
        var deferred = q.defer();

    	// find the object with username value username
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].username == username) {
		    	// return the matching object, if found
		    	deferred.resolve(users[i]);
			}
		}

    	return deferred.promise;
    }

    function findUserByCredentials(credentials) {
        var deferred = q.defer();

    	// credentials : { username : '', password : ''}
    	// find the user in the collection who has username credentials.username and password credentials.password
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].username == credentials.username && users[i].password == credentials.password) {
		    	// return the matching object, if found
		    	deferred.resolve(users[i]);
			}
		}

    	// otherwise return null
    	return deferred.promise;
    }
}