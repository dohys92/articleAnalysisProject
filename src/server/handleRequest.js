const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");

function validateRequest(req, res, next) {
    if(!req.body.text) {
        return res.status(400).json({
           message: 'Invalid URL'
        })
    }
    return next();
}

function registerPostHandler(req, res, next) {
    var textapi = new aylien({
        application_id: process.env.APP_ID,
        application_key: process.env.APP_KEY
    });
    console.log(":: POST HANDLER ::")
    console.log(req.body)

    textapi.sentiment({
      'url': req.body.text,
      'mode': 'document'
    }, function(error, response) {
        res.send(response)

    }); 

    console.log(req.body)
 
}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;