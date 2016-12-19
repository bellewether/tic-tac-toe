import Backbone from 'backbone';
import $ from 'jquery';

import Game from 'app/models/game';
// import SpaceView from 'app/views/space_view';

var SpaceBoardView = Backbone.View.extend({

  initialize: function() {

  };

  events {
    'click .space': 'spaceClick'
  };

  spaceClick: function() {
    console.log("A space clicked!")
  };

  render: function() {

    return this;
  };

});

export default SpaceBoardView;
