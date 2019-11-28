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

const requestPost = require('./handleRequest.js')
var aylien = require("aylien_textapi");



console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);

})

app.post('/article', requestPost.validateRequest, requestPost.registerPostHandler);

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})



module.exports = app