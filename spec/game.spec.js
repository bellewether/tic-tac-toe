import Game from 'game';
import GameBoard from 'game';

describe('Game', function() {
  var testGame = new Game();
  var testBoard = new GameBoard();

  it("should create a gameBoard with initialized", function() {
    expect(testGame.board).toBeDefined();
    expect(testGame.board).toEqual(testBoard.board);
    expect(testGame.board.gameBoard).toEqual(jasmine.any(Array));
  });

  it('should initialize the correct Player for player1', function() {
    expect(testGame.player1.marker).toEqual("X");
    expect(testGame.player1.turnCounter).toEqual(true);
  });

  it('should initialize the correct Player for player2', function() {
    expect(testGame.player2.marker).toEqual("O");
    expect(testGame.player2.turnCounter).toEqual(false);
  });

  describe('whichPlayer', function() {
    var testGame2 = new Game();
    testGame2.gameCounter = false;

    it('should return Player1 for a new game because counter equals true', function(){
      expect(testGame.whichPlayer()).toEqual(testGame.player1);
    });

    it('should return Player2 if gameCounter equals false', function(){
      expect(testGame2.whichPlayer()).toEqual(testGame.player2);
    });
  });

  describe('Valid', function() {


  });

});
