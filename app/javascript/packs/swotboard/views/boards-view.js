import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import React from 'react'
import BoardsViewComponent from '../components/boards-view-component'

const BoardsView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    let component = React.createFactory(BoardsViewComponent)
    let boardsCollection = this.options.boards
    return component({boards: boardsCollection})
  }
})

export default BoardsView
