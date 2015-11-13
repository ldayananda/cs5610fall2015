var module = angular.module("FormBuilderAppUsers");

module.exports = function(app) {
	var users = [];
    var api = {
        createUser : createUser,
        findAllUsers : findAllUsers,
        findUsersById : findUsersById,
        updateUser : updateUser,
        deleteUser : deleteUser,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials
    };
    return api;

    function createUser(user) {
    	// add to current collection
    	users.push(user);
    	// return collection
    	return users;
    }

    function findAllUsers() {
    	// return collection
    	return users;
    }

    function findUsersById(userId) {
    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
		    	// return the matching element, if found
				return users[i];
			}
		}

    	// return null otherwise
    	return null;
    }

    function updateUser(userId, newUser) {
    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
				var user = users[i];
		    	// update found user with newUser's property values
				user.id = newUser.id;
				user.firstName = newUser.firstName;
				user.lastName = newUser.lastName;
				user.username = newUser.username;
				user.password = newUser.password;
			}
		}

    	// return all objects
        return users;
    }

    function deleteUser(userId) {
    	// find the object in the collection with id userId
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].id == userId) {
		    	// remove the matching instance
		    	users.splice(i, 1);
			}
		}
        
        return users;
    }

    function findUserByUsername(username) {
    	// find the object with username value username
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].username == username) {
		    	// return the matching object, if found
		    	return users[i];
			}
		}

    	// otherwise return null
    	return null;
    }

    function findUserByCredentials(credentials) {
    	// credentials : { username : '', password : ''}
    	// find the user in the collection who has username credentials.username and password credentials.password
    	var len = users.length;
		for (i = 0; i < len; i++) {
			if (users[i].username == credentials.username && users[i].password == credentials.password) {
		    	// return the matching object, if found
		    	return users[i];
			}
		}

    	// otherwise return null
    	return null;
    }
}