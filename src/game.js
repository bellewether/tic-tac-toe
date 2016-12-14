var Game = function() {
  this.board = new GameBoard();
  this.player1 = new Player1();
  this.player2 = new Player2();
  this.gameCounter = true;
  this.turnCounter = 0;
  this.winner = null;
  console.log(this.board);
  // console.log(this.player1);
  // console.log(this.player2);
};

Game.prototype.playTurn = function(row, column) {
  if(this.winner !== null) {
    console.log("Game is Over " + this.winner.name + " won.");
    return "Game is Over " + this.winner.name + " won.";
  } else {
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

      if(this.turnCounter >= 5) {
        if(this.board.hasWon() === true) {
          console.log(player.name + " you're the Winner!!!");
          this.winner = player;
          // return player.name;
        } else if(this.board.hasWon() === "tie") {
          console.log("Cat's Game, it's a tie.");
          // return "Cat's Game.";
        }
      }

    } else {
      console.log("That position is already taken, go Again");
    }
    console.log(this.board);
    console.log("who's turn: " + this.gameCounter);
    console.log("round number: " + this.turnCounter);
  }
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
    return false;
  } else {
    var locationValue = this.board.gameBoard[row][column];
    console.log("in valid, location value = " + locationValue);
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

GameBoard.prototype.hasWon = function() {
  // var board = this.gameBoard;
  var row0 = this.gameBoard[0];
  var row1 = this.gameBoard[1];
  var row2 = this.gameBoard[2];

  //rows
  if ((row0[0] == row0[1]  && row0[1] == row0[2]) ||
      (row1[0] == row1[1]  && row1[1] == row1[2]) ||
      (row2[0] == row2[1]  && row2[1] == row2[2])) {
    console.log("is there a winner1: " + true);
    return true;

    //columns
  } else if ((row0[0] == row1[0] && row1[0] == row2[0]) ||
              (row0[1] == row1[1] && row1[1] == row2[1]) ||
              (row0[2] == row1[2] && row1[2] == row2[2])) {
    console.log("00 " + row0[0]);
    console.log("10 " + row1[0]);
    console.log("20 " + row2[0]);

    console.log("01 " + row0[1]);
    console.log("11 " + row1[1]);
    console.log("21 " + row2[1]);

    console.log("02 " + row0[2]);
    console.log("12 " + row1[2]);
    console.log("22 " + row2[2]);

    console.log("is there a winner2: " + true);
    return true;

    //Diagonals
  } else if ((row0[0] == row1[1] && row1[1] == row2[2]) || (row0[2] == row1[1] && row1[1] == row2[0])) {
      console.log("is there a winner3: " + true);
      return true;
  } else {
    if(this.aTie()){
      return "tie";
    } else {
      return false;
    }
  }
};

GameBoard.prototype.aTie = function() {
  var row0 = this.gameBoard[0];
  var row1 = this.gameBoard[1];
  var row2 = this.gameBoard[2];

  if((row0.includes(null)) || (row1.includes(null)) || (row2.includes(null))) {
    return false;
  } else {
    return true;
  }
};

var Player1 = function() {
  this.marker = "X";
  this.turnCounter = true;
  this.name = "player1";
};

var Player2 = function() {
  this.marker = "O";
  this.turnCounter = false;
  this.name = "player2";
};


// DO NOT REMOVE THIS
export default Game;
