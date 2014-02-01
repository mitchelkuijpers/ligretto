/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('underscore');
var Router = require('../../Router');

require("./UsernameForm.less");
require("semantic-browser/elements/segment.css");
require("semantic-browser/elements/button.css");
require("semantic-browser/elements/input.css");

module.exports = React.createClass({
  router : undefined,
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
    this.router = Router();
  },
  joinGame : function() {
    this.router.setRoute("/game/join/" + this.state.username);
  },
  createGame : function() {
    this.router.setRoute("/game/create/" + this.state.username);
  },
  render : function() {
    return (
      <form className='ui form segment username' onSubmit={this.handleSubmit}>
        <div className="ui fluid input">
          <input type="text" placeholder="Choose a username" onChange={this.updateUserName} autoFocus='true' />
        </div>
        <div className="2 fluid ui buttons">
          <button onClick={this.joinGame} disabled={this.state.disabled} className="ui button">Join game</button>
          <button  onClick={this.createGame}  disabled={this.state.disabled} className="ui button">Create game</button>
        </div>
      </form>
      );
  }

});