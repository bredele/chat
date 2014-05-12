
/**
 * Module dependencies.
 * @api private
 */

var brick = require('brickjs');
var tmpl = require('./chat.html');
var repeat = require('repit');
var wall = require('wall');


var app = module.exports = wall();

var chat = brick(tmpl, []).use(repeat());


app.on('message', function(type, msg) {
	// use repit instead data.length!
	chat.set(chat.data.length, {
		message: msg,
		type: type
	});
});

// this is just a test
app.sandbox.on('mounted', function() {
	chat.build(document.body);
});