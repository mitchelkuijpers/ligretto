var test = require('./test');
var React = require('react');
var Game = require('./components/game.jsx');

var socket = io.connect("/");

socket.on('game', function(data) {
	React.renderComponent(
	  Game({game: data}),
	  document.getElementById('game')
	);
});
