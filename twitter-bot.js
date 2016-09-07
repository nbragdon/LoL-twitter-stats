var Twit = require('twit');

var TwitterBot = new Twit({
  consumer_key: '<insert here>'
  , consumer_secret: '<insert here>'
  , access_token: '<insert here>'
  , access_token_secret: '<insert here>'
});

exports.searchByTag = function(options, callback) {
	var tag = '';
	var date = '';
	var count = 100;
	if (options.tag) {
		tag = options.tag;
	}
	if (options.since) {
		date = ' since:' + options.since;
	}
	if (options.count) {
		count = options.count;
	}
	TwitterBot.get('search/tweets', {q: tag + date, count: count}, function(err, data, response) {
		callback(err, data);
	})
}
