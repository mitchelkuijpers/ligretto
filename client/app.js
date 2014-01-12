var test = require('./test');
var React = require('react');
var Game = require('./components/game.jsx');

React.renderComponent(
  Game(),
  document.getElementById('game')
);

