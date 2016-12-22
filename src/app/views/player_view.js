import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
// import SpaceView from 'app/views/space_view';

var PlayerView = Backbone.View.extend({

  initialize: function() {
    // this.template = _.template(Backbone.$('#player-view').html());

  },

  render: function() {

    return this;
  }

});

export default PlayerView;
