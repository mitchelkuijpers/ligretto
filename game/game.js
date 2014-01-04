var gameState = {
  users: [
    {
      name: 'Orange',
      stacks: [
        ['1a', '1b', '1c', '1d','1e'],
        ['1f'],
        ['1g'],
        ['1h']
      ],
      hand: ['1i', '1j', '1k']
    },
    {
      name: 'Chicken',
      stacks: [
        ['2a', '2b', '2c', '2d','2e'],
        ['2f'],
        ['2g'],
        ['2h']
      ],
      hand: ['2i', '2j', '2k']
    },
    {
      name: 'Apple',
      stacks: [
        ['3a', '3b', '3c', '3d','3e'],
        ['3f'],
        ['3g'],
        ['3h']
      ],
      hand: ['3i', '3j', '3k']
    },
    {
      name: 'Cherry',
      stacks: [
        ['4a', '4b', '4c', '4d','4e'],
        ['4f'],
        ['4g'],
        ['4h']
      ],
      hand: ['4i', '4j', '4k']
    }
  ],
  board: {
    size: {width: 4, height: 4},
    state: [
      [],[],[],[],
      [],[],[],[],
      [],[],[],[],
      [],[],[],[]
    ]
  },
  cards: {
    '1a': {user: 'Orange', color: 'red', number: 1},
    '1b': {user: 'Orange', color: 'red', number: 2},
    '1c': {user: 'Orange', color: 'blue', number: 1},
    '1d': {user: 'Orange', color: 'blue', number: 2},
    '1e': {user: 'Orange', color: 'blue', number: 3},
    '1f': {user: 'Orange', color: 'green', number: 1},
    '1g': {user: 'Orange', color: 'green', number: 2},
    '1h': {user: 'Orange', color: 'green', number: 3},
    '1i': {user: 'Orange', color: 'yellow', number: 1},
    '1j': {user: 'Orange', color: 'yellow', number: 2},
    '1k': {user: 'Orange', color: 'yellow', number: 3},
    '2a': {user: 'Chicken', color: 'red', number: 1},
    '2b': {user: 'Chicken', color: 'red', number: 2},
    '2c': {user: 'Chicken', color: 'blue', number: 1},
    '2d': {user: 'Chicken', color: 'blue', number: 2},
    '2e': {user: 'Chicken', color: 'blue', number: 3},
    '2f': {user: 'Chicken', color: 'green', number: 1},
    '2g': {user: 'Chicken', color: 'green', number: 2},
    '2h': {user: 'Chicken', color: 'green', number: 3},
    '2i': {user: 'Chicken', color: 'yellow', number: 1},
    '2j': {user: 'Chicken', color: 'yellow', number: 2},
    '2k': {user: 'Chicken', color: 'yellow', number: 3},
    '3a': {user: 'Apple', color: 'red', number: 1},
    '3b': {user: 'Apple', color: 'red', number: 2},
    '3c': {user: 'Apple', color: 'blue', number: 1},
    '3d': {user: 'Apple', color: 'blue', number: 2},
    '3e': {user: 'Apple', color: 'blue', number: 3},
    '3f': {user: 'Apple', color: 'green', number: 1},
    '3g': {user: 'Apple', color: 'green', number: 2},
    '3h': {user: 'Apple', color: 'green', number: 3},
    '3i': {user: 'Apple', color: 'yellow', number: 1},
    '3j': {user: 'Apple', color: 'yellow', number: 2},
    '3k': {user: 'Apple', color: 'yellow', number: 3},
    '4a': {user: 'Orange', color: 'red', number: 1},
    '4b': {user: 'Orange', color: 'red', number: 2},
    '4c': {user: 'Orange', color: 'blue', number: 1},
    '4d': {user: 'Orange', color: 'blue', number: 2},
    '4e': {user: 'Orange', color: 'blue', number: 3},
    '4f': {user: 'Orange', color: 'green', number: 1},
    '4g': {user: 'Orange', color: 'green', number: 2},
    '4h': {user: 'Orange', color: 'green', number: 3},
    '4i': {user: 'Orange', color: 'yellow', number: 1},
    '4j': {user: 'Orange', color: 'yellow', number: 2},
    '4k': {user: 'Orange', color: 'yellow', number: 3}
  }
};

exports.onConnect = function (socket) {
  socket.emit('game', gameState);

  socket.on('move', function (message) {
    console.log('('+ message.uid + ') Received move "' + message.card + '" from "' + message.user + '" to location "' + message.location + '"');

    socket.emit('move', message);
  });
};

