import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


import Game from 'app/models/game';
// import SpaceView from 'app/views/space_view';

var SpaceBoardView = Backbone.View.extend({

  initialize: function() {
    this.template = _.template(Backbone.$('#board-cells').html());
    this.gameBoard = this.model.gameBoard;
  },

  events: {
    'click td': 'spaceClick'
  },

  spaceClick: function(event) {

    this.trigger('spaceSelect', {model: this.model, position: event.currentTarget.id})
    this.render();
  },

  render: function() {
    console.log(this.gameBoard[0]);
    console.log(this.gameBoard[1]);
    console.log(this.gameBoard[2]);

    this.$el.html(this.template({board: this.gameBoard}));

    return this;
  },

  placeMarker: function() {
    console.log("The gameboard model was changed!");
  }

});

export default SpaceBoardView;
