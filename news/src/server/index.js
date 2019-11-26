const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const bodyParser = require('body-parser');

const path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const requestPost = require('../client/js/requestPost.js')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(express.static('dist'))

const requestPost = require('../client/js/requestPost.js')

var aylien = require("aylien_textapi");

var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

console.log(__dirname)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);

// })
app.get('/article', function(req, res) {
	res.json(requestPost)
})

app.post('/article', showMessage)
function showMessage(req, res) {
	res.send()
}
// app.post('/article', requestPost.validateRequest, requestPost.registerPostHandler);

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

textapi.classify({
	'url': 'https://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile/'
		}, function(error,response) {
			if(error===null) {
				console.log(response)
		}
})


