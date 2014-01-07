var React = require('react');
var Card = require('./card.jsx');

module.exports = React.createClass({
  propTypes: {
    stack: React.PropTypes.array.isRequired,
	cards: React.PropTypes.object.isRequired
  },
  render: function() {
	var cards = this.props.cards;
    var cardNodes = this.props.stack.map(function (location) {
      return <li><Card card={cards[location]} id={location} /></li>;
    });
    return (
    	<ul className="stack">
    		{cardNodes}
    	</ul>
    );
  }
});