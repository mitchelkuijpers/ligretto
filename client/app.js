var test = require('./test');
var React = require('react');
var Card = require('./components/card.jsx');

var socket = io.connect("/");

React.renderComponent(
  Card(),
  document.getElementById('example')
);

socket.on('game', function(data) {
	console.log(data);
});