var React = require('react');

module.exports = React.createClass({

   render: function() {
       return (
           React.DOM.form({className: 'username-form'},
             React.DOM.h1({}, 'Play Ligretto'),
             React.DOM.input({className: 'topcoat-text-input', type: 'text', placeholder: 'Choose a username'}),
             React.DOM.br(),
             React.DOM.br(),
             React.DOM.a({className: 'topcoat-button', href: '#/game/1'}, 'Join game'),
             React.DOM.br(),
             'Or',
             React.DOM.br(),
             React.DOM.a({className: 'topcoat-button', href: '#/game/1'}, 'Create game'))
           );
   }

});