import Backbone from 'backbone';
import GameBoard from 'app/models/gameboard';

const Game = Backbone.Model.extend({
  defaults: {

    player1: {
      marker: "X",
      turnCounter: true,
      name: "player1"
    },

    player2: {
      marker: "O",
      turnCounter: false,
      name: "player2"
    },

    gameCounter: true,
    turnCounter: 0,
    winner: null

  },

  initialize: function(options) {
    this.board = new GameBoard();
  },

  arrayPosition: function(pos) {
    if (pos == 0) {
      var arrayPos = [0,0];
    } else if (pos == 1) {
      var arrayPos = [0,1];
    } else if (pos == 2) {
      var arrayPos = [0,2];
    } else if (pos == 3) {
      var arrayPos = [1,0];
    } else if (pos == 4) {
      var arrayPos = [1,1];
    } else if (pos == 5) {
      var arrayPos = [1,2];
    } else if (pos == 6) {
      var arrayPos = [2,0];
    } else if (pos == 7) {
      var arrayPos = [2,1];
    } else if (pos == 8) {
      var arrayPos = [2,2];
    }
    return arrayPos;
  },

  playTurn: function(position) {
    var row = this.arrayPosition(position)[0];
    var column = this.arrayPosition(position)[1];

    if(this.get('winner') !== null) {
      console.log("Game is Over " + this.get('winner').name + " won.");
      return "Game is Over " + this.get('winner').name + " won.";
    } else {
      // console.log(this.whichPlayer());
      var player = this.whichPlayer();
      // console.log(this.valid(row, column));
      if (this.valid(row, column)) {
        this.board.gameBoard[row][column] = player.marker;

        if (player == this.get('player1')) {
          this.set('gameCounter', false);
          this.set('turnCounter', this.get('turnCounter') + 1);
        } else {
          this.set('gameCounter', true);
          this.set('turnCounter', this.get('turnCounter') + 1);
        }

        if(this.get('turnCounter') >= 5) {
          if(this.board.hasWon() === true) {
            console.log(player + " you're the Winner!!!");
            this.set('winner', 'player');
            return player.name;
          } else if(this.board.hasWon() === "tie") {
            console.log("Cat's Game, it's a tie.");
            // return "Cat's Game.";
          }
        }

      } else {
        console.log("That position is already taken, go Again");
      }
      // console.log(this.get('board')),
      // console.log("who's turn: " + this.get('gameCounter'),
      // console.log("round number: " + this.get('turnCounter')
    }

  },

  whichPlayer: function() {
    if (this.get('gameCounter') === true) {
      return this.get('player1');
    } else {
      return this.get('player2');
    }
  },

  valid: function(row,column) {
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
  }
});


// DO NOT REMOVE THIS
export default Game;
