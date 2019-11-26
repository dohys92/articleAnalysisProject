require('dotenv').config()
function validateRequest(req, res, next) {
    if(!req.body.text) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    }
    return next();
}

function registerPostHandler(req, res) {
    var aylien = require("aylien_textapi");
    var textapi = new aylien({
        application_id: process.env.APP_ID,
        application_key: process.env.APP_KEY
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;