/**
 * @jsx React.DOM
 */

var React = require('react');

module.exports = React.createClass({

    render: function () {
        return (
            <form className='username-form'>
                <h1>Play Ligretto</h1>
                <input type='text' placeholder='Choose a username' className='topcoat-text-input' />
                <br />
                <br />
                <a href="#/game/1" className="topcoat-button">Join Game</a>
                <br />
                Or
                <br />
                <a href="#/game/1" className="topcoat-button">Create Game</a>
            </form>
        );
    }

});