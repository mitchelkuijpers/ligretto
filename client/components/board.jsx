var React = require('react');
var Tile = require('./tile.jsx');

module.exports = React.createClass({
  componentWillMount: function() {
  	var that = this;
  	this.props.socket.on('game', function(data) {
		that.setState({tiles: data.board.locations})
	});
  },
  getInitialState: function() {
    return {tiles: []};
  },
  render: function() {
    var tileNodes = this.state.tiles.map(function (location, index) {
      return <Tile key={index}/>;
    });
    return (
    	<div id="board">
    		{tileNodes}
    	</div>
    );
  }
});