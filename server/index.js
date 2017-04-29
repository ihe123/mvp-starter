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

app.post('/items', function(req, res) {
  var options = {
    method: 'GET',
    url: 'https://api.imgur.com/3/gallery/r/aww',
    headers: { Authorization: 'Bearer 0844cae63a6db6e4e3513329da037cbb94f42a52' }
  }
  var callback = function(error, response, body) {
    if(error){
      throw error;
    } else {
      var info = JSON.parse(body);
      var data = info.data;
      res.send(data);
    }
  }
  request(options, callback);
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

  //   body: '{ "name": "imgur", "strategy": "oauth2", "options": { "client_id", "b5172783192ea5c", "client_secret": "0d80da649b19945b265b250a3aeb9ff2a2d0ee8c", "authorizationURL": "https://api.imgur.com/oauth2/authorize", "tokenURL": "https://api.imgur.com/oauth2/token", "scripts": { "fetchUserProfile": "function(accessToken, ctx, cb) { request.get(\'https://api.imgur.com/3/account/me\', { headers: { \'Authorization\': \'Bearer \' + accessToken } }, function(e, r, b) { if (e) return cb(e); if (r.statusCode !== 200 ) return cb(new Error(\'StatusCode: \' + r.statusCode)); var profile = JSON.parse(b).data; profile.user_id = profile.id; cb(null, profile); });}' 
