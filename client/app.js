var React = require('react');
var Game = require('./components/game/game');
var Router = require('./Router');
var UsernameForm = require('./components/room/UsernameForm');

require("./app.less")


var mainContainer = document.getElementById('game');

var unmountMain = function() {
    React.unmountComponentAtNode(mainContainer)
}

var index = function() {
    React.renderComponent(
        UsernameForm(),
        mainContainer
    );
};

var game = function(gameId) {
    React.renderComponent(
        Game(),
        mainContainer
    );
};

var routes = {
    "/" : index,
    "/game/:gameId": game,
    "/game/join/:userName": game,
    "/game/create/:userName": game
};

var router = Router(routes);
router.configure({
    before: unmountMain
});
router.init('/');