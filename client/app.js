var React = require('react');
var Game = require('./components/game');

React.renderComponent(
  Game(),
  document.getElementById('game')
);

