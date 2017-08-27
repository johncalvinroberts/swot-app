import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import MainComponent from '../components/main-component'
import React from 'react'

const MainView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    return React.createElement(MainComponent)
  },
  pageRender: function(view) {
    let htmlContent = view.render().$el
    this.$el.find('#main-container').html(htmlContent)
  }
})

export default MainView
