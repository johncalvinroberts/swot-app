import Backbone from 'backbone/backbone'

const CardsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('initialize cards collection')
  }
})

export default CardsCollection
