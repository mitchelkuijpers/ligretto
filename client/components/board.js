/**
 * @jsx React.DOM
 */

var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  propTypes: {
    board: React.PropTypes.object.isRequired,
	cards: React.PropTypes.object.isRequired,
	onAddCard: React.PropTypes.func.isRequired
  },
  render: function() {
    var that = this;
    var tileNodes = this.props.board.locations.map(function (location, index) {
      return <Tile key={index} onCardDrop={that.props.onAddCard} cards={that.props.cards} stack={location} />;
    });
    return (
    	<div id="board">
    		{tileNodes}
    	</div>
    );
  }
});