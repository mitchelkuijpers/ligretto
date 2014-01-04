var React = require('react');
var Tile = require('./tile.jsx');

module.exports = React.createClass({
  propTypes: {
    game: React.PropTypes.object.isRequired
  },
  render: function() {
    var tileNodes = this.props.game.board.locations.map(function (location, index) {
      return <Tile key={index}/>;
    });
    return (
    	<div id="board">
    		{tileNodes}
    	</div>
    );
  }
});