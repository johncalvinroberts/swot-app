import Backbone from 'backbone/backbone'

var globalCounter = 0

const Board = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize board model')
    globalCounter += 1
    this.set({id: globalCounter})
  }
})

export default Board
