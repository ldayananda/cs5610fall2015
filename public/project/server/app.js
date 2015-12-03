'use strict';
module.exports = function(app, db) {
    var userModel = require("./models/user.model.js")(app);
    require("./services/user.service.js")(app, userModel);
};