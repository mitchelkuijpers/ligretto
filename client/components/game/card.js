/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({
  propTypes : {
    card : React.PropTypes.object.isRequired,
    id : React.PropTypes.string.isRequired
  },
  handleDragStart : function(event) {
    event.target.style.opacity = 1;
    var dataTransfer = event.nativeEvent.dataTransfer;
    dataTransfer.effectAllowed = 'move';
    dataTransfer.setData('text/plain', this.props.id);
  },
  handleDragEnd : function(event) {
    event.target.style.opacity = 1;
  },
  render : function() {
    var props = _.defaults(this.props, {draggable : true})
    return (
      <div onDragEnd={this.handleDragEnd} onDragStart={this.handleDragStart} draggable={props.draggable} id={this.props.id} className={"card " + this.props.card.color}>
		  {this.props.card.number}
      </div>
      );
  }
});
