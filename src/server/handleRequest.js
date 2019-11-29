

function validateRequest(req, res, next) {
    if(!req.body.text) {
        return res.status(400).json({
           message: 'Invalid URL'
        })
    }
    return next();
}

function registerPostHandler(req, res, next) {
    const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");
    var textapi = new aylien({
        application_id: process.env.APP_ID,
        application_key: process.env.APP_KEY
    });
    console.log(":: POST HANDLER ::")
    console.log(":: req.body HERE ::")
    console.log(req.body);
    console.log(":: req.body.text HERE ::")
    console.log(req.body.text);

    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        if(error===null){
            console.log(response);
            res.send(response);
        } else {
            console.log(error);
        }
    }); 

}


exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;
