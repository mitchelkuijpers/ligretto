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
    return {game: {
      users: {},
      cards: {},
      board: {
        locations: []
      }
    }};
  },

  componentDidMount: function() {
    var that = this;
    this.socket = io.connect("/",  {'force new connection':true} );
    window.test = this.socket;
    this.socket.on('game', function(initialState) {
      that.setState({game: initialState});
    });
    this.socket.on('join', function(data) {
    });
    this.socket.on('joined', function(user) {
      that.setState({'userId': user.userId})
    });
    this.socket.on('change', function(newState) {
      that.setState({game: newState});
    });
  },

  handleAddCard: function(index, cardId) {
    this.socket.emit('move', {user: this.state.userId, location: index, card: cardId});
  },

  componentWillUnmount: function() {
    this.socket.disconnect();
    delete this.socket;
  },

  render: function() {
    var playerNode = <div />;
    var players = this.state.game.users;
    var cards = this.state.game.cards;

    if(this.state.userId && _.size(this.state.game.users) > 0) {
      var player = players[this.state.userId];
      playerNode = <Player key={this.state.userId + ""} stacks={player.stacks} name={player.name} cards={cards} />;
    }
    return (
      <div id="game">
        <Board board={this.state.game.board} cards={this.state.game.cards} onAddCard={this.handleAddCard} />
        {playerNode}
      </div>
      );
  }
});
