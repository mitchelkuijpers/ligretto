/**
 * @jsx React.DOM
 */

var React = require("react");
var Stack = require("./stack");

module.exports = React.createClass({
    propTypes: {
      stacks: React.PropTypes.array.isRequired,
  	  cards: React.PropTypes.object.isRequired,
	  key: React.PropTypes.string.isRequired,
	  name: React.PropTypes.string.isRequired
    },
	render: function() {
		var cards = this.props.cards;
	    var stackNodes = this.props.stacks.map(function (stack, index) {
	      return <li><Stack key={index} stack={stack} cards={cards} /></li>;
	    });
		return (
			<div id={this.props.key} className="player">
				<div className="name">{this.props.name}</div>
				<ul className="stacks">
					{stackNodes}
				</ul>
			</div>
			
		);
	}
});
