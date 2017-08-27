import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import MainComponent from '../components/main-component'
import BoardsCollection from '../models/boards-collection'
import React from 'react'

const MainView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    let component = React.createFactory(MainComponent)
    let boardsCollection = new BoardsCollection();
    return component({collection: boardsCollection})
  },
  pageRender: function(view) {
    let htmlContent = view.render().$el
    this.$el.html(htmlContent)
  }
})

export default MainView
