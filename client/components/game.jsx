var React = require('react');
var Board = require('./board.jsx');
var Player = require('./player.jsx');
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
    var socket = io.connect("/");
    socket.on('game', function(data) {
        that.setState(data);
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