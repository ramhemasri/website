(function(controller) {

	var logger = require("../utils/logger");

    controller.init = function(app) {
        app.get("/", function(req, res) {
        	
            res.render("home/index", { });
        });
    };

})(module.exports);
