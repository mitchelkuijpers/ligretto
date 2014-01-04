var React = require('react');
var Tile = require('./tile.jsx');

module.exports = React.createClass({
  addTile: function() {
	var list = this.state.data;
	list.push([]);
	this.setState({data: list})
  },
  componentWillMount: function() {
  },
  getInitialState: function() {
    return {data: [1,2,3,4,5]};
  },
  render: function() {
    var tileNodes = this.state.data.map(function (location) {
      return <Tile index={location} />;
    });
    return (
    	<div id="board">
    		{tileNodes}
    	</div>
    );
  }
});