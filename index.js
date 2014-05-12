
/**
 * Module dependencies.
 * @api private
 */

var brick = require('brickjs');
var tmpl = require('./chat.html');
var repeat = require('repit');
var wall = require('wall');


var app = module.exports = wall();

var chat = brick(tmpl, [])
  .use(repeat())
  .build(document.body);

app.sandbox.on('mounted', function() {
	console.log('mount', arguments);
});

app.on('message', function(msg) {
	console.log('message received', msg);
	// use repit instead data.length!
	chat.set(chat.data.length, {
		message: msg,
		type: 'you'
	});
});