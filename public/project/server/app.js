'use strict';
module.exports = function(app, db) {
    var userModel = require("./models/user.model.js")(app);
    require("./services/user.service.js")(app, userModel);

    var powwowModel = require("./models/powwow.model.js")(app);
    require("./services/powwow.service.js")(app, powwowModel);
};