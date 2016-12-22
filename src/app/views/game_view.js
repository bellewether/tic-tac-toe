import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


import Game from 'app/models/game';
import PlayerView from 'app/views/player_view';
import SpaceBoardView from 'app/views/space_board_view';

var GameView = Backbone.View.extend({

  initialize: function() {
    var spaceBoard = this.model.board;
    var spaceBoardView = new SpaceBoardView({
      el: '#space-board-view',
      model: spaceBoard,
    });

    this.listenTo(this.model, 'change:winner', this.announceWinner);
    this.listenTo(this.model, 'change:tie', this.announceTie);
  },

  events: {
    'click .start-game-button': 'startGame'

  },

  startGame: function() {
    this.model.board.destroy();
    this.model.destroy();

    var game = new Game();
    var newGameView = new GameView({
      el: '#game-view',
      model: game
    });

    newGameView.render();

    console.log("Starting a new game");
  },

  playATurn: function(options) {
    console.log("playATurn was called!");
    console.log(JSON.parse(options.position));

    // console.log(options.position);
    // var player = this.model.whichPlayer();
    // var marker = player.marker;
    // console.log(">>>>>>>"+player.name);

    // JSON.parse(options.position).append(marker);

    this.model.playTurn(JSON.parse(options.position));
  },

  announceWinner: function() {
    window.alert("YOU WON!");
  },

  announceTie: function() {
    window.alert("Cat's Game, it's a tie.");
  },

  render: function() {
    // Clear out the table first
    // we'll add all of the markers back afterwards
    const spaceList = this.$('#space-board-view');
    spaceList.empty();

    var newSpaceBoard = this.model.board;
    var newSpaceBoardView = new SpaceBoardView({
      el: '#space-board-view',
      model: newSpaceBoard,
      template: this.boardTemplate
    });
    this.listenTo(newSpaceBoardView, 'spaceSelect', this.playATurn)

    spaceList.append(newSpaceBoardView.render().$el);

    return this;
  }

});

export default GameView;
