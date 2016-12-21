import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
import PlayerView from 'app/views/player_view';
import SpaceBoardView from 'app/views/space_board_view';

var GameView = Backbone.View.extend({

  initialize: function() {
    var spaceBoard = this.model.board;
    var spaceBoardView = new SpaceBoardView({
      el: '#space-board-view',
      model: spaceBoard
    });

    var playerView = new PlayerView({
      el: '#player-view'
    });

    spaceBoardView.render();
    playerView.render();

    this.listenTo(spaceBoardView, 'spaceSelect', this.playATurn)
    this.listenTo(this.model, 'change:winner', this.announceWinner);
  },

  render: function() {

    return this;
  },

  events: {
    'click .start-game-button': 'startGame'
  },

  startGame: function() {
    console.log("Starting a game");
  },

  playATurn: function(options) {
    console.log("playATurn was called!");
    console.log(JSON.parse(options.position));
    this.model.playTurn(JSON.parse(options.position));

  },

  announceWinner: function() {
    window.alert("YOU WON!");
  }

});

export default GameView;
