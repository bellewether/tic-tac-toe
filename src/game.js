var Game = function() {
  this.board = new gameBoard();
  this.player1 = new Player1();
  this.player2 = new Player2();
  this.gameCounter = true;
  console.log(this.board);
  console.log(this.player1);
  console.log(this.player2);

};

// Game.prototype.playTurn = function(location) {
//   var player = whichPlayer();
//   if (valid) {
//       location =
//   }
// };

var whichPlayer = function() {
  if (this.gameCounter == true) {
    return this.player1
  } else {
    return this.player2
  }
};

var valid = function(location) {

  if (this.board != 'X' && this.board != 'O') {
    return true
  } else {
    return false
  }
};

// var locationId = function(location) {
//   var column = location[1];
//   if (location[0] == 'A') {
//     console.log(column);
//     console.log(this.board[0][column]);
//     return this.board[0][column]
//   }
// };

var gameBoard = function() {
  this.board = [];
  this.board[0] = ['A0', 'A1', 'A2'];
  this.board[1] = ['B0', 'B1', 'B2'];
  this.board[2] = ['C0', 'C1', 'C2'];

  this.locationId = function(location) {
    var column = location[1];
    if (location[0] == 'A') {
      console.log(column);
      console.log(this.board[0][column]);
      return this.board[0][column]
    }
  };
  // this.boardLocation = {
  //   'top0': [0][0],
  //   'top1': [0][1],
  //   'top2': [0][2],
  //   'mid0': [1][0],
  //   'mid1': [1][1],
  //   'mid2': [1][2],
  //   'bot0': [2][0],
  //   'bot1': [2][1],
  //   'bot2': [2][2]
  // }
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
