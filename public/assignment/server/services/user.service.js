//var module = angular.module("FormBuilderAppUsers");
var q = require("q");

module.exports = function(app, model) {
	app.post("/api/assignment/user", createUser);
	app.get("/api/assignment/user", findAllUsers);
	app.get("/api/assignment/user/:id", findUserById);
	app.put("/api/assignment/user/:id", updateUser);
	app.delete("/api/assignment/user/:id", deleteUser);

	function createUser(req, res) {
        model
            .createUser(req.body)
            .then(function(users) {
            	res.json(users);
            });
    }

	function findAllUsers(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username != null && password != null) {
            var credentials = {
                username : username,
                password : password
            };

            model
                .findUserByCredentials(credentials)
                .then(function(user) {
                    res.json(user);
                });

        } else if (username != null) {
            model
                .findUserByUsername(username)
                .then(function(user) {
                    res.json(user);
                });
        } else {
            model
                .findAllUsers()
                .then(function(users) {
                	res.json(users);
                });
        }
    }

	function findUserById(req, res) {
        model
            .findUserById(req.params.id)
            .then(function(user) {
            	res.json(user);
            });
    }

	function updateUser(req, res) {
        model
            .updateUser(req.params.id, req.body)
            .then(function(users) {
            	res.json(users);
            });
    }


	function deleteUser(req, res) {
        model
            .deleteUser(req.params.id)
            .then(function(users) {
            	res.json(users);
            });
    }

    function findUserByUsername(req, res) {
    	model
    		.findUserByUsername(req.params.username)
    		.then(function(user) {
    			res.json(user);
    		})

    }

    function findUserByCredentials(req, res) {
    	model
    		.findUserByCredentials(req.params.username, req.params.password)
    		.then(function(user){
    			res.json(user);
    		})
    }
};