console.log('hello')
window.SwotBoard = {
  Models: {},
  Collections: {},
  ViewClasses: {},
  Views: {},
  Routers:{},
  initialize: function(){
    Backbone.history.start();
  }
}
$(document).ready(function(){
  SwotBoard.initialize();
});
