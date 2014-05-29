var express = require('express');
var app = express();
var request = require('request');
var qs = require('querystring');
var twit = require('./twitter-bot');

var server = app.listen(8080, function() {
  console.log("Serverlistening on port" + server.address().port);
});

app.get('/hello.txt', function(req, res) {
  twit.searchByTag({tag: 'leagueoflegends'}, function(err, data) {
  	if (!err) {
  		res.send(data);
  	} else {
  		console.log(err);
  	}
  })
});
