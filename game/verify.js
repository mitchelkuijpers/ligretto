var _ = require('underscore');

var verifyUserHasCard = function (gameState, userId, cardId) {
  console.log("verifyUserHasCard for user: " + userId);
  var user = gameState.users[userId];
  console.log(user.stacks);
  return _.find(user.stacks, function (stack) {
    console.log(stack.length);
    console.log(stack[stack.length - 1] + " === " + cardId);
    return stack.length > 0 && stack[stack.length - 1] == cardId
  }) != null;
};

var verifyPosition = function (gameState, locationIndex, cardId) {
  console.log("verifyPosition");
  var location = gameState.board.locations[locationIndex];
  var lastLocationCardId = (location.length == 0 ? null : location[location.length - 1]);
  var card = gameState.cards[cardId];

  if (lastLocationCardId === null) {
    console.log('stack is empty: ' + card.number);
    return card.number === 1;
  } else {
    console.log('stack is not empty: ');
    var lastLocationCard = gameState.cards[lastLocationCardId];
    return lastLocationCard.color == card.color && lastLocationCard.number + 1 == card.number;
  }
};

exports.checkMove = function (gameState, move) {
  return verifyUserHasCard(gameState, move.user, move.card) && verifyPosition(gameState, move.location, move.card);
};
