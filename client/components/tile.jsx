var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
    	<div className="tile" id={this.props.index}></div>
    );
  }
});