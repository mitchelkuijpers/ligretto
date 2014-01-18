var React = require('react');
var Game = require('./components/game/game');
var Director = require('director');
var GameRoom = require('./components/room/GameRoom');

var mainContainer = document.getElementById('game');

var unmountMain = function() {
    React.unmountComponentAtNode(mainContainer)
}

var index = function() {
    React.renderComponent(
        GameRoom(),
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
    "/game/:gameId": game
};

var router = Director.Router(routes);
router.configure({
    before: unmountMain
});
router.init('/');