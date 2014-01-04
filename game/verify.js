var verifyUserHasCard = function (gameState, userId, cardId) {
  var user = gameState.users[userId];
  return _.find(user.stacks, function (stack) {
    return stack.length > 0 && stack[0] == cardId
  }) != null;
};

var verifyPosition = function (gameState, locationIndex, cardId) {
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

exports.checkMove = function (gameState, move) {
  return verifyUserHasCard(gameState, move.user, move.card)
    && verifyPosition(gameState, move.location, move.card);
};