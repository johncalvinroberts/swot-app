import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import MainComponent from '../components/main-component'
import React from 'react'

const MainView = BaseView.extend({
  component: function(){
    return <MainComponent boardname="somename"/>
  },
  pageRender: function(view) {
    let htmlContent = view.render().$el
    this.$el.html(htmlContent)
  }
})

export default MainView
