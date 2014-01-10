var React = require('react');

module.exports = React.createClass({

  handleDragOver: function(event) {
	  event.preventDefault();
  },

  handleDrop: function(event) {
	  event.preventDefault();
	  var cardId = event.nativeEvent.dataTransfer.getData('text/plain');
	  console.log(cardId);
  },

  render: function() {
    return (
    	<div onDrop={this.handleDrop} onDragOver={this.handleDragOver} className="tile" id={this.props.index}></div>
    );
  }
});
