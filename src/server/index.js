var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const APP_ID = "623f5a95"
const API_KEY = "560b01d1bb645c8ba6751693395ca208"
const bodyParser = require('body-parser')
const cors = require('cors')

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: APP_ID,
  application_key: API_KEY
});

const app = express()
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.post('/language', function (req, res) {
    // res.sendFile('dist/index.html')
    textapi.language({
        text: req.body.text
      }, function(error, response) {
        if (error === null) {
          res.send(response)
        }
      });
      
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
