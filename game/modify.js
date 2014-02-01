var _ = require('underscore');

var updatePosition = function (gameState, cardId, locationIndex) {
  gameState.board.locations[locationIndex].push(cardId);
};

var updateHand = function (gameState, cardId, userId) {
  var user = gameState.users[userId];

  var stack = _.find(user.stacks, function (stack) {
    return stack.length > 0 && stack[0] == cardId
  });
  stack.shift();
  var stackIndex = user.stacks.indexOf(stack);
  if (stackIndex >= 1 && stackIndex <= 3 && user.stacks[0].length > 0) {
    user.stacks[stackIndex].push(user.stacks[0].shift());
  }
};

exports.applyMove = function (gameState, move) {
  updatePosition(gameState, move.card, move.location);
  updateHand(gameState, move.card, move.user);
};
