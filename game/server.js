var modify = require('./modify');
var verify = require('./verify');
var builder = require('./builder');

var checkGameOver = function (gameState, userId) {
  return gameState.users[userId].stacks[0].length == 0;
};

var gameStarted = false;
var users = {
};

exports.onConnect = function (socket) {
  var userId = ((Math.random()*1000000)+1);
  users[userId] = { userId: userId, name: 'User ' + userId};
  console.log('User joined: ' + userId);

  socket.emit('join', users[userId]);


  socket.on('gameStart', function() {
    if (gameStarted) {
      return;
    }

    var gameState = builder.build(_.extend(users, {}));

    socket.broadcast.emit('game', gameState);

    socket.on('move', function (message) {
      console.log('(' + message.uid + ') Received move "' + message.card + '" from "' + message.user + '" to location "' + message.location + '"');

      var validMove = verifyUserHasCard(message.user, message.card)
        && verifyPosition(gameState, message.location, message.card);

      if (validMove) {
        //Allow move
        modify.applyMove(gameState, message);
        socket.broadcast.emit('move', message);

        if (checkGameOver(message.user)) {
          socket.broadcast.emit('gameOver', {user: message.user});
        }
      } else {
        socket.broadcast.emit('rejectMove', {uid: message.uid});
      }
    });
  });
};

