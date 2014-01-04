var createDeck = function (userId) {
  var answer = {};
  var colors = ['yellow', 'green', 'blue', 'red'];
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 4; j++) {
      var card = {
        user: userId,
        number: i + 1,
        color: colors[j]
      };
      var key = userId + "_" + i + "_" + j;
      answer[key] = card;
    }
  }
  return answer;
};

var shuffle = function (o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var createStacks = function (cards) {
  var stacks = [], shuffled = shuffle(cards);
  stacks.push(shuffled.splice(0, 10));
  stacks.push(shuffled.shift());
  stacks.push(shuffled.shift());
  stacks.push(shuffled.shift());
  stacks.push(shuffled);
  return stacks;
};

var addUser = function(gameState, user) {
  var userCards = createDeck(user.userId);
  user.stacks = createStacks(userCards);
  _.extend(gameState.cards, userCards);
  gameState.board.push([], [], [], []);
};

exports.build = function (users) {
  var gameState = {};
  gameState.users = users;
  gameState.cards = {};
  gameState.board = {size: {width: null, height: null}, locations: []};

  _.each(gameState.users, function (user) {
    addUser(gameState, user);
  });
};