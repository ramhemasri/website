(function(controller) {
	var logger = require("../utils/logger");

	controller.init = function(app){
		
        /**
         * @api {post} /api/notify/join/ Join the newsletter
         * @apiName JoinNewsletter
         * @apiGroup Newsletter
         * @apiVersion 1.0.0
         *
         * @apiParam {string} email The email to join.
         *
         * @apiErrorTitle (400) 400 Bad Request
         * @apiError (400) email The specifiend email is null or the format is invalid.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 400 Bad Request
         *     {
         *       [{
         *           "param": "email",
         *           "msg": "Field required"
         *       }, {
         *           "param": "email",
         *           "msg": "Invalid email format"
         *       }]
         *     }
         * 
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 500 Internal Server Error
         *     {
         *       Something went wrong. Please try again.
         *     }
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 201 Created
         *     {
         *       Thanks for signing up!
         *     }
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 304 Not Modified
         *     {
         *       User already subscribed
         *     }
         */
		app.post('/api/notify/join', function(req, res) {
			req.assert('email', 'Field required').notEmpty();
            req.assert('email', 'Invalid email format').isEmail();

            var errors = req.validationErrors();
            var mappedErrors = req.validationErrors(true);

            if (errors) {
                logger.warn("Wrong request: ", errors);
                res.json(400, errors);
            }

			var mailChimpAPI = require('mailchimp').MailChimpAPI;
            var credentials = require("../config/credentials.js").credentials;

            try {
                var mailChimp = new mailChimpAPI(credentials.mailchimp.key, {
                    version: '2.0'
                });

                mailChimp.lists_subscribe({
                    id: credentials.mailchimp.listId,
                    email: {
                        email:req.body.email
                    }
                }, function(error, data) {
                    if (error) {

                        if(error.code == 214)
                        {   
                            logger.debug("User already subscribed");
                            res.send(304,"User already subscribed");    
                        }
                        else
                        {
                            logger.error("There is an error calling MailChimp: " + error);
                            res.send(500,"Something went wrong. Please try again.");
                        }
                    } else {
                        logger.debug(data);
                        res.send(201,"Thanks for signing up!");
                    }
                });

            } catch (error) {
                logger.error(error.message);
            }
		});
	};

})(module.exports);
