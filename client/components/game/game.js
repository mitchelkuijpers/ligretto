/**
 * @jsx React.DOM
 */

require('./game.less');
var React = require('react');
var Board = require('./board');
var Player = require('./player');
var _ = require('underscore');

require("semantic-browser/elements/segment.css");
require("semantic-browser/modules/dimmer.css");


module.exports = React.createClass({

  getInitialState: function() {
    return {game: {
      users: {},
      cards: {},
      board: {
        locations: []
      }
    }, user: {}};
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
      that.setState({user: user})
    });
    this.socket.on('change', function(newState) {
      that.setState({game: newState});
    });
    this.socket.on('rejectMove', function() {
      that.setState({rejected: true});
      window.setTimeout(function() {
        that.setState({rejected: false});
      }, 100);
    });
  },

  handleAddCard: function(index, cardId) {
    this.socket.emit('move', {user: this.state.user.userId, location: index, card: cardId});
  },

  componentWillUnmount: function() {
    this.socket.disconnect();
    delete this.socket;
  },

  render: function() {
    console.log(this.state.user);
    var playerNode = <div />;
    var players = this.state.game.users;
    var cards = this.state.game.cards;

    if(this.state.user.userId && _.size(this.state.game.users) > 0) {
      var player = players[this.state.user.userId];
      playerNode = <Player key={this.state.user.userId + ""} stacks={player.stacks} name={player.name} cards={cards} />;
    }
    return (
      <div id="game">
        <h1>{this.state.user.name}</h1>
        <Board board={this.state.game.board} cards={this.state.game.cards} onAddCard={this.handleAddCard} />
        {playerNode}
        <div className={"ui inverted dimmer page " + (this.state.rejected ? 'active' : 'disabled')}></div>
      </div>
      );
  }
});
