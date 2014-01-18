/**
 * @jsx React.DOM
 */

var React = require('react');
var Stack = require('./stack');

module.exports = React.createClass({
  propTypes: {
    key: React.PropTypes.number.isRequired,
    onCardDrop: React.PropTypes.func.isRequired,
    stack: React.PropTypes.array.isRequired,
    cards: React.PropTypes.object.isRequired
  },
  handleDragOver: function(event) {
	  event.preventDefault();
  },
  handleDrop: function(event) {
    console.log(event.target);
	var dataTransfer = event.nativeEvent.dataTransfer;
	var cardId = dataTransfer.getData('text/plain');
	dataTransfer.dropEffect = "move";
	this.props.onCardDrop(this.props.key, cardId);
	event.preventDefault();
  }, 
  render: function() {
    return (
    	<div onDrop={this.handleDrop} onDragOver={this.handleDragOver} className="tile" id={this.props.key}>
    	    <Stack stack={this.props.stack} cards={this.props.cards} draggable={false} />
    	</div>
    );
  }
});
