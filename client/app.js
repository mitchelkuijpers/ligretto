var test = require('./test');
var React = require('react');
var Board = require('./components/board.jsx');

var socket = io.connect("/");

socket.on('game', function(data) {
	React.renderComponent(
	  Board({game: data}),
	  document.getElementById('game')
	);
});
