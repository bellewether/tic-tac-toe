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
  if((row > 2) || (column > 2)) {
    console.log(row + "," + column + " is not a valid location");
    return "that's not a valid location";
  } else {
    var locationValue = this.board.gameBoard[row][column];
    console.log(locationValue);
    if (locationValue != 'X' && locationValue != 'O') {
      return true;
    } else {
      return false;
    }
  }
};

var GameBoard = function() {
  this.gameBoard = [];
  this.gameBoard[0] = [ null, null, 'O'];
  this.gameBoard[1] = [ null, 'X', null];
  this.gameBoard[2] = [ null, null, null];
};

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
