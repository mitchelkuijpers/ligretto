/**
 * @jsx React.DOM
 */

var React = require('react');
var Card = require('./card');
var _ = require('underscore');

module.exports = React.createClass({
  propTypes: {
    stack: React.PropTypes.array.isRequired,
	cards: React.PropTypes.object.isRequired
  },
  render: function() {
	var cards = this.props.cards;
    var props = _.defaults(this.props, {draggable: true})
    var cardNodes = this.props.stack.map(function (location) {
        this.offset += 3;
        return (<li style={{top: -this.offset}}>
                    <Card card={cards[location]} id={location} draggable={props.draggable} />
                </li>);
    }, {offset: 0});
    return (
    	<ul className="stack">
    		{cardNodes}
    	</ul>
    );
  }
});