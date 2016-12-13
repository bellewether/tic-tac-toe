var Game = function() {
  this.board = new gameBoard();
  this.player1 = new Player1();
  this.player2 = new Player2();
  this.gameCounter = true;
  console.log(this.board);
  console.log(this.player1);
  console.log(this.player2);

};

Game.prototype.playTurn = function(location) {
  var player = whichPlayer();
  if (valid) {
      location =
  }
};

var whichPlayer = function() {
  if (this.gameCounter == true) {
    return this.player1
  } else {
    return this.player2
  }
};

var valid = function(location) {
  if (this.board location == null) {
    return true
  } else {
    return false
  }
};

var gameBoard = function() {
  this.board = [];
  this.board[0] = ['top0', 'top1', 'top2'];
  this.board[1] = ['mid0', 'mid1', 'mid2'];
  this.board[2] = ['bot0', 'bot1', 'bot2'];

  // this.board[0] = [null, null, null];
  // this.board[1] = [null, null, null];
  // this.board[2] = [null, null, null];
};

var Player1 = function() {
  this.marker = "X";
  this.turnCounter = true;
};

var Player2 = function() {
  this.marker = "O";
  this.turnCounter = false;
};
//
// //totalScore(): Function which sums up and returns the score of the players words
// Player.prototype.totalScore = function() {
//   var playerWords = this.plays;
//   var totalScore = 0;
//
//   for (var i = 0; i < playerWords.length; i++) {
//     var wordScore = Scrabble.score(playerWords[i]);
//     totalScore += wordScore;
//   }
//   return totalScore;
// };

// DO NOT REMOVE THIS
export default Game;
