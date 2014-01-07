var React = require('react');
var Board = require('./board.jsx');
var Player = require('./player.jsx');

module.exports = React.createClass({
  propTypes: {
    game: React.PropTypes.object.isRequired
  },
  render: function() {
	  var playerNodes = [];
	  var players = this.props.game.users;
	  var cards = this.props.game.cards;
	  for (var index in players) {
		  var player = players[index];
		  playerNodes.push(<Player key={index} stacks={player.stacks} name={player.name} cards={cards} />);
	  }
    return (
    	<div id="game">
			<Board board={this.props.game.board} cards={this.props.game.cards} />
			{playerNodes}
		</div>
    );
  }
});