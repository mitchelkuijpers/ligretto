/**
 * @jsx React.DOM
 */

var React = require('react');
var Card = require('./card');

module.exports = React.createClass({
  propTypes: {
    stack: React.PropTypes.array.isRequired,
	cards: React.PropTypes.object.isRequired
  },
  render: function() {
	var cards = this.props.cards;
    var cardNodes = this.props.stack.map(function (location) {
        this.offset += 3;
        return (<li style={{top: -this.offset}}>
                    <Card card={cards[location]} id={location}  />
                </li>);
    }, {offset: 0});
    return (
    	<ul className="stack">
    		{cardNodes}
    	</ul>
    );
  }
});