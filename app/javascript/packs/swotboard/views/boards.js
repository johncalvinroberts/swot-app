import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import BoardsComponent from '../components/addboard-component'
import React from 'react'

const Boards = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    return React.createElement(BoardsComponent,{boards: this.option.boards})
  },
  pageRender: function(view) {
    let htmlContent = view.render().$el
    this.$el.html(htmlContent)
  }
})

export default Boards
