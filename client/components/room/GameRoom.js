require('./GameRoom.less');

var React = require('react');
var UsernameForm = require('./UsernameForm.js')

module.exports = React.createClass({
    render: function() {
        return (
            React.DOM.div({className: 'game-room'},
                UsernameForm()
            ))
    }
})