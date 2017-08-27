import Backbone from 'backbone/backbone'

const Board = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize board model')
  }
})

export default Board
