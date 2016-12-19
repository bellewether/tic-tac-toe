import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
import GameView from 'app/views/game_view';


$(document).ready(function() {
  var game = new Game();

  var gameview = new GameView({
    el: '#game-view',
    model: game
  });

  gameview.render();
});
