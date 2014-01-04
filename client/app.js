var test = require('./test');
var React = require('react');
var Board = require('./components/board.jsx');

var socket = io.connect("/");

React.renderComponent(
  Board(),
  document.getElementById('example')
);

socket.on('game', function(data) {
	console.log(data);
});