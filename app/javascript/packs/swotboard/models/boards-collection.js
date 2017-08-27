import Backbone from 'backbone/backbone'

const BoardsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('initialize boards collection')
  },
  url: '/api/boards'
})

export default BoardsCollection
