/**
 * @jsx React.DOM
 */

require('./game.less');
var React = require('react');
var Board = require('./board');
var Player = require('./player');
var _ = require('underscore');


module.exports = React.createClass({

  getInitialState: function() {
    return {
        users: {},
        cards: {},
        board: {
            locations: []
        }
    };
  },

  componentDidMount: function() {
    var that = this;
    this.socket = io.connect("/",  {'force new connection':true} );
    window.test = this.socket;
    this.socket.on('game', function(data) {
        that.setState(data);
    });
    this.socket.on('join', function(data) {
      console.log('JOIN');
      console.log(data);
    });
    this.socket.on('move', function(data) {
      console.log('MOVE');
      console.log(data);
    });
    
    
  },

  handleAddCard: function(index, cardId) {
    var newState = this.state;
    var currentStack = newState.board.locations[index]
    newState.board.locations[index] =  _.flatten([currentStack, cardId]);

    newState.users = _.map(newState.users, function(user) {
        user.stacks = _.map(user.stacks,
            function(stack) {
                return _.without(stack, cardId)
            });
            return user;
        }
    );


    this.setState(newState);
  },

  componentWillUnmount: function() {
      this.socket.disconnect();
      delete this.socket;
  },

  render: function() {
	  var playerNodes = [];
	  var players = this.state.users;
	  var cards = this.state.cards;
	  for (var index in players) {
		  var player = players[index];
		  playerNodes.push(<Player key={index} stacks={player.stacks} name={player.name} cards={cards} />);
	  }
    return (
    	<div id="game">
			<Board board={this.state.board} cards={this.state.cards} onAddCard={this.handleAddCard} />
			{playerNodes}
		</div>
    );
  }
});
