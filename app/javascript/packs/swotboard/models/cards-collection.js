import Backbone from 'backbone/backbone'
import CardModel from './card-model'

const CardsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('initialize cards collection')
  },
  model: CardModel
})

export default CardsCollection
