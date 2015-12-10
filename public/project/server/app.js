'use strict';
module.exports = function(app, db) {
    var userModel = require("./models/user.model.js")(app, db);
    require("./services/user.service.js")(app, db, userModel);

    var powwowModel = require("./models/powwow.model.js")(app, db);
    require("./services/powwow.service.js")(app, db, powwowModel);
};