const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static('dist'))

var requestPost = require('./handleRequest')
var aylien = require("aylien_textapi");

var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);

// })

// app.post('/article', requestPost.validateRequest, requestPost.registerPostHandler);

app.post('/article', (req,res)=> {
    textapi.sentiment({
        'url': req.body.text
    }, function(error, response){
        if(error===null) {
            console.log(":: USER INPUT URL ANALYSIS ::")
            console.log(response);
            res.send(response);
        } else {
        console.log(error)
    }
    })
})
// test if api works
textapi.sentiment({
      'url': 'https://techcrunch.com/2019/11/26/disney-adds-continue-watching-feature/'
    }, function(error, response) {
        if(error===null){
            console.log(response)
            // res.send(response)
        }
    }); 


module.exports = app;