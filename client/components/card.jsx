var React = require('react');

module.exports = React.createClass({
  propTypes: {
    card: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired
  },
  handleDragStart: function(event) {
	  event.target.style.opacity = 0;  	
  },
  handleDragEnd: function(event) {
	  event.target.style.opacity = 1;  	
  },
  render: function() {
    return (
    	<div onDragEnd={this.handleDragEnd} onDragStart={this.handleDragStart} draggable="true" id={this.props.id} className={"card " + this.props.card.color}>
		  {this.props.card.number}
		</div>
    );
  }
});