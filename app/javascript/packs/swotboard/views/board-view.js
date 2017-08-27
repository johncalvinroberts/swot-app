import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import React from 'react'
import BoardViewComponent from '../components/board-view-component'

const BoardView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    let component = React.createFactory(BoardViewComponent)
    let board = this.options.board
    return component({model: board})
    // let board = this.options.board
    // return<BoardViewComponent model={board}/>
  }
})

export default BoardView
