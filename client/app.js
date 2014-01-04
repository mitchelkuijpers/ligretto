var test = require('./test');
var hello = require('./main.jsx');

var socket = io.connect("/");

socket.on('game', function(data) {
	console.log(data);
});