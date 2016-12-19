import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
import PlayerView from 'app/views/player_view';
import SpaceBoardView from 'app/views/space_board_view';

var GameView = Backbone.View.extend({

  initialize: function() {
    var spaceBoardView = new SpaceBoardView({
      el: '#space-board-view'
    })

    var playerView = new PlayerView({
      el: '#player-view'
    })

    spaceBoardView.render();
    playerView.render();
  },

  render: function() {

    return this;
  },

  events {
    'click .start-game': 'startGame'
  },

  startGame: function() {
    console.log("Starting a game")
  }

});

export default GameView;
