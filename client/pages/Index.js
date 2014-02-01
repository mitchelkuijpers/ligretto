/**
 * @jsx React.DOM
 */

var React = require('react');
var UsernameForm = require('../components/room/UsernameForm');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <UsernameForm />
      </div>
      )  
  }

});
