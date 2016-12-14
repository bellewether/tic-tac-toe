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

  describe('valid', function() {
    var testGame3 = new Game();
    testGame3.board.gameBoard[0][2] = "X";

    it('should handle an invalid location entry appropriately', function() {
      expect(testGame3.valid(4,4)).toEqual("that's not a valid location");
    });

    it('should return true if a location is unoccupied(still equal to null)', function() {
      expect(testGame3.valid(0,0)).toEqual(true);
    });

    it('should return false if a location is occupied by either an X or O', function() {
      expect(testGame3.valid(0,2)).toEqual(false);
    });
  });

  describe('playTurn', function() {
    var testGame4 = new Game();

    it('should add a player1 marker (X) if the space is open', function() {
      expect(testGame4.board.gameBoard[0][0]).toEqual(null);
      expect(testGame4.gameCounter).toEqual(true);
      expect(testGame4.turnCounter).toEqual(0);


      testGame4.playTurn(0,0);
      expect(testGame4.gameCounter).toEqual(false);
      expect(testGame4.turnCounter).toEqual(1);
      expect(testGame4.board.gameBoard[0][0]).toEqual('X');
    });

    it('should not add a players marker if the space is taken', function() {
      expect(testGame4.board.gameBoard[0][0]).toEqual('X');
      expect(testGame4.gameCounter).toEqual(false);

      testGame4.playTurn(0,0);
      expect(testGame4.gameCounter).toEqual(false);
      expect(testGame4.turnCounter).toEqual(1);
      expect(testGame4.board.gameBoard[0][0]).toEqual('X');
    });

    it('should add player2 marker (O) if the space is open', function() {
      expect(testGame4.board.gameBoard[2][2]).toEqual(null);
      expect(testGame4.gameCounter).toEqual(false);

      testGame4.playTurn(2,2);
      expect(testGame4.gameCounter).toEqual(true);
      expect(testGame4.turnCounter).toEqual(2);
      expect(testGame4.board.gameBoard[2][2]).toEqual('O');
    });
  });
});
