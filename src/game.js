var Game = function() {
  this.board = new GameBoard();
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

Game.prototype.whichPlayer = function() {
  if (this.gameCounter === true) {
    return this.player1;
  } else {
    return this.player2;
  }
};

Game.prototype.valid = function(row,column) {

    var locationValue = this.board.gameBoard[row][column];
    console.log(locationValue);
    if (locationValue != 'X' && locationValue != 'O') {
      return true;
    } else {
      return false;
    }
};

// Game.prototype.valid = function(location) {
//   if (this.board.gameBoard.includes(location)) {
//     return true;
//   } else {
//     return false;
//   }
// };

var GameBoard = function() {
  this.gameBoard = [];
  this.gameBoard[0] = [ null, null, 'O'];
  this.gameBoard[1] = [ null, 'X', null];
  this.gameBoard[2] = [ null, null, null];
};

// GameBoard.prototype.locationValue = function(location) {
//   var column = location[1];
//   if (location[0] == 'A') {
//     console.log(column);
//     console.log(this.board[0][column]);
//     return this.board[0][column];
//   } else if (location[0] == 'B') {
//     console.log(column);
//     console.log(this.board[1][column]);
//     return this.board[1][column];
//   } else if (location[0] == 'C') {
//     console.log(column);
//     console.log(this.board[2][column]);
//     return this.board[2][column];
//   }
// };

var Player1 = function() {
  this.marker = "X";
  this.turnCounter = true;
};

var Player2 = function() {
  this.marker = "O";
  this.turnCounter = false;
};


// DO NOT REMOVE THIS
export default Game;
