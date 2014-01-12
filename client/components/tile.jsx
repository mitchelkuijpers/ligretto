var React = require('react');

module.exports = React.createClass({

  handleDragOver: function(event) {
	  event.preventDefault();
  },

  handleDrop: function(event) {
	var dataTransfer = event.nativeEvent.dataTransfer;
	var cardId = dataTransfer.getData('text/plain');
	console.log(cardId);
	dataTransfer.dropEffect = "move";
	event.preventDefault();
  }, 

  render: function() {
    return (
    	<div onDrop={this.handleDrop} onDragOver={this.handleDragOver} className="tile" id={this.props.index}></div>
    );
  }
});
