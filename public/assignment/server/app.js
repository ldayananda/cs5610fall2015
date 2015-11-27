module.exports = function(app, db) {
    var userModel = require("./models/user.model.js")(app, db);
    require("./services/user.service.js")(app, db, userModel);

    var formModel = require("./models/form.model.js")(app, db);
    require("./services/form.service.js")(app, db, formModel);
    require("./services/field.service.js")(app, db, formModel);

};