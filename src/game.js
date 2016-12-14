var Game = function() {
  this.board = new GameBoard();
  this.player1 = new Player1();
  this.player2 = new Player2();
  this.gameCounter = true;
  this.turnCounter = 0;
  console.log(this.board);
  console.log(this.player1);
  console.log(this.player2);
};

Game.prototype.playTurn = function(row, column) {
  // console.log(this.whichPlayer());
  var player = this.whichPlayer();
  // console.log(this.valid(row, column));
  if (this.valid(row, column)) {
    this.board.gameBoard[row][column] = player.marker;
    if (player == this.player1) {
      this.gameCounter = false;
      this.turnCounter++ ;
    } else {
      this.gameCounter = true;
      this.turnCounter++ ;
    }
  } else {
    console.log("That position is already taken, go Again");
  }
  console.log(this.board.gameBoard);
  console.log(this.gameCounter);
  console.log(this.turnCounter);
};

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
  this.gameBoard[0] = [ null, null, null];
  this.gameBoard[1] = [ null, null, null];
  this.gameBoard[2] = [ null, null, null];
};

GameBoard.prototype.hasWon = function () {
  // var board = this.gameBoard;
  var row0 = this.gameBoard[0];
  var row1 = this.gameBoard[1];
  var row2 = this.gameBoard[2];

  if ((row0[0] == row0[1]  && row0[1] == row0[2]) ||
      (row1[0] == row1[1]  && row1[1] == row1[2]) ||
      (row2[0] == row2[1]  && row2[1] == row2[2])) {
    console.log("true");
    return true;
  } else if ((row0[0] == row1[0] && row1[0] == row2[0]) ||
              (row0[1] == row1[1] && row1[1] == row2[1]) ||
              (row0[2] == row1[2] && row1[2] == row2[2])) {
    console.log("true");
    return true;
  } else if ((row0[0] == row1[1] && row1[1] == row2[2]) || (row0[2] == row1[1] && row1[1] == row2[0])) {
      console.log("true");
      return true;
  } else {
    return false;
  }
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
