var modify = require('./modify');
var verify = require('./verify');
var gameState = require('./staticGameState').game;

var checkGameOver = function (userId) {
  return gameState.users[userId].stacks[0].length == 0;
};

exports.onConnect = function (socket) {
  socket.emit('game', gameState);

  socket.on('move', function (message) {
    console.log('(' + message.uid + ') Received move "' + message.card + '" from "' + message.user + '" to location "' + message.location + '"');

    var validMove = verifyUserHasCard(message.user, message.card)
      && verifyPosition(gameState, message.location, message.card);

    if (validMove) {
      //Allow move
      modify.applyMove(gameState, message);
      socket.emit('move', message);

      if (checkGameOver(message.user)) {
        socket.emit('gameOver', {user: message.user});
      }
    } else {
      socket.emit('rejectMove', {uid: message.uid});
    }
  });
};

