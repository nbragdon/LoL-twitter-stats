var Twit = require('twit');

var TwitterBot = new Twit({
  consumer_key: 'wVmiW2RqRHmD2KTOQHn8dtQYG'
  , consumer_secret: 'pfOI5INWpbrsf3JWUpWAwGljohzRboDyZ0YabWXcohKAz6cSdp'
  , access_token: '2531599472-iahmknoc83RGk81UlK8Xd4m8pxbtit2f5iy1YBK'
  , access_token_secret: 'HpPU0I3BUueGY4G6ZA1alZs1XYUgrLtf8lkbJW6jZn8fO'
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
