var React = require('react');
var director = require('director');

var Index = require('./pages/Index.js');
var Game = require('./pages/Game.js');

var Root = React.createClass({

  getInitialState: function() {
    return {page: Index, args: {}}
  },

  componentWillMount: function() {
    var root = this;
    var routes = {
      '/' : function() {
        root.setState({page: Index, args: {}})
      },
      '/game/:username' : function(username) {
        root.setState({page: Game, args:{}});
      } 
    }

    this.router = new director.Router(routes);
    this.router.init("/");
  },

  render : function() {
    return this.state.page(this.state.args);
  }

});

React.renderComponent(new Root(), document.getElementById('game'));
