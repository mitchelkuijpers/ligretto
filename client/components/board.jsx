var React = require('react');
var Tile = require('./tile.jsx');

module.exports = React.createClass({
  propTypes: {
    board: React.PropTypes.object.isRequired,
	cards: React.PropTypes.object.isRequired
  },
  render: function() {
    var tileNodes = this.props.board.locations.map(function (location, index) {
      return <Tile key={index} />;
    });
    return (
    	<div id="board">
    		{tileNodes}
    	</div>
    );
  }
});