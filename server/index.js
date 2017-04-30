var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');
var request = require('request');
var config = require('../env/config.js');
var oauthserver = require('oauth2-server');

var app = express();
var port = 3000;
var clientId = 'b5172783192ea5c';

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submitted', function(req, res) {
  //need to handle posting of mood and full name to put into the database
  
  var newUser = {};
  console.log('nameeeeeeee', req.body.name)
  newUser.name = req.body.name;
  newUser.mood = req.body.mood;
    
  items.insert(newUser, function(err, entry) {
    if(err) {
      throw err;
    } else {
      console.log('docs', entry);
    }
  });

  items.selectAll(function(err, data){
    if(err) {
      throw err;
    } else {
      console.log('herreeeeeeee', data);
    }
  })
  console.log(Object.keys(items))
  console.log()
  res.send();
});

app.post('/items', function(req, res) {
  
  var optionsAD = {
    method: 'GET',
    url: 'https://api.imgur.com/3/gallery/r/aww',
    headers: { Authorization: 'Bearer 8809a36d8f045e417530f370e18227a9b9e69aa3' }
    }
  
  var options = {
    method: 'GET',
    url: 'https://api.imgur.com/3/gallery/r/motivated',
    headers: { Authorization: 'Bearer 8809a36d8f045e417530f370e18227a9b9e69aa3' }
    }

  var callback = function(error, response, body) {
    if(error){
      console.log('erroorrrr',error)
      throw error;
    } else {
      console.log('bodyyyy', body)
      var info = JSON.parse(body);
      var data = info.data;
      res.send(data);
    }
  }
}); 

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


