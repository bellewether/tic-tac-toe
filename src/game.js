var Game = function() {
  this.board = new gameBoard();
  this.player1 = new Player1();
  this.player2 = new Player2();
  console.log(this.board);
  console.log(this.player1);
  console.log(this.player2);
};

var gameBoard = function() {
  this.board = [];
  this.board[0] = [null, null, null];
  this.board[1] = [null, null, null];
  this.board[2] = [null, null, null];
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
