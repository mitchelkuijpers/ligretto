/**
 * @jsx React.DOM
 */

require('./UsernameForm.less');

var React = require('react');
var _ = require('underscore');
var Router = require('../../Router');

module.exports = React.createClass({
    router: undefined,
    getInitialState: function() {
        return {username: '', disabled: true};
    },
    updateUserName: function(e) {
        this.setState({username: e.target.value, disabled: _.isEmpty(e.target.value)})
    },
    handleSubmit: function(e) {
        e.preventDefault();
    },
    componentDidMount: function() {
        this.router = Router();
    },
    joinGame: function() {
        this.router.setRoute("/game/join/" + this.state.username);
    },
    createGame: function() {
        this.router.setRoute("/game/create/" + this.state.username);
    },
    render: function () {
        return (
            <form className='username-form' onSubmit={this.handleSubmit}>
                <h1>Play Ligretto</h1>
                <input type='text' placeholder='Choose a username' className='topcoat-text-input' onChange={this.updateUserName} autoFocus='true' />
                <br />
                <br />
                <button onClick={this.joinGame} className="topcoat-button" disabled={this.state.disabled}>Join Game</button>
                <br />
                <br />
                Or
                <br />
                <br />
                <button onClick={this.createGame} className="topcoat-button" disabled={this.state.disabled}>Create Game</button>
            </form>
        );
    }

});