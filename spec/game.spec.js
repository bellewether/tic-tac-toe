import Game from 'game';
import gameBoard from 'game';

describe('Game', function() {
  var testGame = new Game();
  var testBoard = new gameBoard();

  it("should create a gameBoard with initialized", function() {
    expect(testGame.board).toBeDefined();
    expect(testGame.board).toEqual(testBoard.board);
  });

  it('should initialize the correct Player for player1', function() {
    expect(testGame.player1.marker).toEqual("X");
    expect(testGame.player1.turnCounter).toEqual(true);
  });

  it('should initialize the correct Player for player2', function() {
    expect(testGame.player2.marker).toEqual("O");
    expect(testGame.player2.turnCounter).toEqual(false);
  });
});
