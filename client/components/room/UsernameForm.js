/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('underscore');

require("./UsernameForm.less");
require("semantic-browser/elements/segment.css");
require("semantic-browser/elements/button.css");
require("semantic-browser/elements/input.css");

module.exports = React.createClass({
  getInitialState : function() {
    return {username : '', disabled : true};
  },
  updateUserName : function(e) {
    this.setState({username : e.target.value, disabled : _.isEmpty(e.target.value)})
  },
  handleSubmit : function(e) {
    e.preventDefault();
  },
  componentDidMount : function() {
  },
  render : function() {
    return (
      <form className='ui form segment username' onSubmit={this.handleSubmit}>
        <div className="ui fluid input">
          <input type="text" placeholder="Choose a username" onChange={this.updateUserName} autoFocus='true' />
        </div>
        <a href={"#/game/" + this.state.username} className="ui button fluid">Join game</a>
      </form>
      );
  }

});
