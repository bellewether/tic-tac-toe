import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
// import SpaceView from 'app/views/space_view';

var SpaceBoardView = Backbone.View.extend({

  initialize: function() {

  },

  events: {
    'click td': 'spaceClick'
  },

  spaceClick: function(event) {
    console.log(event.currentTarget.id);
    var marker = "X";
    event.currentTarget.append(marker);

    this.trigger('spaceSelect', {model: this.model, position: event.currentTarget.id})
  },

  render: function() {

    return this;
  }

});

export default SpaceBoardView;
