import Backbone from 'backbone/backbone'

const CardModel = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize Card model')
  },
  urlRoot: '/api/cards'
})

export default CardModel
