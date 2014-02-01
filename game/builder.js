var _ = require('underscore');

var createDeck = function (userId) {
  var answer = {};
  var colors = ['yellow', 'green', 'blue', 'red'];
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 4; j++) {
      var card = {
        user: userId,
        number: i + 1,
        color: colors[j],
        key: userId + "_" + i + "_" + j
      };
      answer[card.key] = card;
    }
  }
  return answer;
};

var shuffle = function (o) {
  return _.shuffle(_.pluck(o, 'key'));
};

var createStacks = function (cards) {
  var stacks = [], shuffled = shuffle(cards);
  stacks.push(shuffled.splice(0, 10));
  stacks.push([shuffled.shift()]);
  stacks.push([shuffled.shift()]);
  stacks.push([shuffled.shift()]);
  stacks.push(shuffled);
  return stacks;
};

var addUser = function(gameState, user) {
  var userCards = createDeck(user.userId);
  user.stacks = createStacks(userCards);
  _.extend(gameState.cards, userCards);
  gameState.board.locations.push([], [], [], []);
};

exports.build = function (users) {
  var gameState = {};
  gameState.users = users;
  gameState.cards = {};
  gameState.board = {size: {width: null, height: null}, locations: []};

  _.each(gameState.users, function (user) {
    addUser(gameState, user);
  });

  gameState.board.size.width = Math.ceil(Math.sqrt(20));
  gameState.board.size.height = Math.floor(Math.sqrt(20));
  return gameState;
};
