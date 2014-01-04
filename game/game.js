var gameState = {
  users: {
    'user1': {
      name: 'Orange',
      stacks: [
        ['1a', '1b', '1c', '1d','1e'],
        ['1f'],
        ['1g'],
        ['1h'],
        ['1i', '1j', '1k']
      ]
    },
    'user2': {
      name: 'Chicken',
      stacks: [
        ['2a', '2b', '2c', '2d','2e'],
        ['2f'],
        ['2g'],
        ['2h'],
        ['2i', '2j', '2k']
      ]
    },
    'user3': {
      name: 'Apple',
      stacks: [
        ['3a', '3b', '3c', '3d','3e'],
        ['3f'],
        ['3g'],
        ['3h'],
        ['3i', '3j', '3k']
      ]
    },
    'user4': {
      name: 'Cherry',
      stacks: [
        ['4a', '4b', '4c', '4d','4e'],
        ['4f'],
        ['4g'],
        ['4h'],
        ['4i', '4j', '4k']
      ]
    }
  },
  board: {
    size: {width: 4, height: 4},
    locations: [
      [],[],[],[],
      [],[],[],[],
      [],[],[],[],
      [],[],[],[]
    ]
  },
  cards: {
    '1a': {user: 'user1', color: 'red', number: 1},
    '1b': {user: 'user1', color: 'red', number: 2},
    '1c': {user: 'user1', color: 'blue', number: 1},
    '1d': {user: 'user1', color: 'blue', number: 2},
    '1e': {user: 'user1', color: 'blue', number: 3},
    '1f': {user: 'user1', color: 'green', number: 1},
    '1g': {user: 'user1', color: 'green', number: 2},
    '1h': {user: 'user1', color: 'green', number: 3},
    '1i': {user: 'user1', color: 'yellow', number: 1},
    '1j': {user: 'user1', color: 'yellow', number: 2},
    '1k': {user: 'user1', color: 'yellow', number: 3},
    '2a': {user: 'user2', color: 'red', number: 1},
    '2b': {user: 'user2', color: 'red', number: 2},
    '2c': {user: 'user2', color: 'blue', number: 1},
    '2d': {user: 'user2', color: 'blue', number: 2},
    '2e': {user: 'user2', color: 'blue', number: 3},
    '2f': {user: 'user2', color: 'green', number: 1},
    '2g': {user: 'user2', color: 'green', number: 2},
    '2h': {user: 'user2', color: 'green', number: 3},
    '2i': {user: 'user2', color: 'yellow', number: 1},
    '2j': {user: 'user2', color: 'yellow', number: 2},
    '2k': {user: 'user2', color: 'yellow', number: 3},
    '3a': {user: 'user3', color: 'red', number: 1},
    '3b': {user: 'user3', color: 'red', number: 2},
    '3c': {user: 'user3', color: 'blue', number: 1},
    '3d': {user: 'user3', color: 'blue', number: 2},
    '3e': {user: 'user3', color: 'blue', number: 3},
    '3f': {user: 'user3', color: 'green', number: 1},
    '3g': {user: 'user3', color: 'green', number: 2},
    '3h': {user: 'user3', color: 'green', number: 3},
    '3i': {user: 'user3', color: 'yellow', number: 1},
    '3j': {user: 'user3', color: 'yellow', number: 2},
    '3k': {user: 'user3', color: 'yellow', number: 3},
    '4a': {user: 'user4', color: 'red', number: 1},
    '4b': {user: 'user4', color: 'red', number: 2},
    '4c': {user: 'user4', color: 'blue', number: 1},
    '4d': {user: 'user4', color: 'blue', number: 2},
    '4e': {user: 'user4', color: 'blue', number: 3},
    '4f': {user: 'user4', color: 'green', number: 1},
    '4g': {user: 'user4', color: 'green', number: 2},
    '4h': {user: 'user4', color: 'green', number: 3},
    '4i': {user: 'user4', color: 'yellow', number: 1},
    '4j': {user: 'user4', color: 'yellow', number: 2},
    '4k': {user: 'user4', color: 'yellow', number: 3}
  }
};

var verifyUserHasCard = function(userId, cardId) {
  var user = gameState.users[userId];
  return _.find(user.stacks, function(stack) { return stack.length > 0 && stack[0] == cardId}) != null;
};

var verifyPosition = function (locationIndex, cardId) {
  var location = gameState.board.locations[locationIndex];
  var lastLocationCardId = (location.length == 0 ? null : location[location.length - 1]);

  var card = gameState.cards[cardId];

  if (lastLocationCardId == null && card.number == 1) {
    return true
  } else {
    var lastLocationCard = gameState.cards[lastLocationCardId];
    return lastLocationCard.color == card.color && lastLocationCard.number + 1 == card.number;
  }
};

exports.onConnect = function (socket) {
  socket.emit('game', gameState);

  socket.on('move', function (message) {
    console.log('('+ message.uid + ') Received move "' + message.card + '" from "' + message.user + '" to location "' + message.location + '"');

    var validMove = verifyUserHasCard(message.user, message.card)
      && verifyPosition(message.location, message.card);

    if (validMove) {
      //Allow move

      //updatePosition
      //updateHand
    } else {
      //Reject move
    }

    socket.emit('move', message);
  });
};

