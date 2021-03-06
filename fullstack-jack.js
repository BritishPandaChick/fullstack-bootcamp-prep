function fullstackJack(handOne, handTwo) {
  var rank = ['2','3','4','5','6','7','8','9', 'T', 'J', 'Q', 'K', 'A'];
  var playerOne = 0;
  var playerTwo = 0;

  for (var card = 0; card < handOne.length; card++) {
    if (rank.indexOf(handOne[card]) > rank.indexOf(handTwo[card])) {
      playerOne++;
    } else if (rank.indexOf(handOne[card]) < rank.indexOf(handTwo[card])) {
      playerTwo++;
    }
  }

  if (playerOne > playerTwo) {
    return "Player 1 wins " + playerOne + " to " + playerTwo + "!";
  } else if (playerTwo > playerOne) {
    return "Player 2 wins " + playerTwo + " to " + playerOne + "!";
  } else {
    return "Tie!"
  }

}






//EXAMPLE TESTS

fullstackJack(['A', '7', '8'], ['K', '5', '9']);
//'Player 1 Wins!'

fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
//'Tie!'
