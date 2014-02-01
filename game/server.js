var modify = require('./modify');
var verify = require('./verify');
var builder = require('./builder');
var _ = require('underscore');
var checkGameOver = function (gameState, userId) {
  return gameState.users[userId].stacks[0].length == 0;
};

var gameStarted = false;
var users = {
};
var sockets = {};

exports.onConnect = function (socket) {
  var userId = ((Math.random()*1000000)+1);
  
  _.each(sockets, function(socket) { socket.emit('join', userId)});

  users[userId] = { userId: userId, name: 'User ' + userId};
  sockets[userId] = socket;
  socket.emit('joined', {userId: userId});

  socket.on('gameStart', function() {
    if (gameStarted) {
      return;
    }

    var gameState = builder.build(_.extend(users, {}));

    _.each(sockets, function(socket){ socket.emit('game', gameState) });

    socket.on('move', function (message) {
      console.log('Received move "' + message.card + '" from "' + message.user + '" to location "' + message.location + '"');

      var validMove = verify.checkMove(gameState, message); 
      if (validMove) {
        console.log('valid move!');
        modify.applyMove(gameState, message);

        _.each(sockets, function(socket) {socket.emit('change', gameState);});

        if (checkGameOver(gameState, message.user)) {
          socket.broadcast.emit('gameOver', {user: message.user});
        }
      } else {
        socket.broadcast.emit('rejectMove', message);
      }
    });
  });
};

