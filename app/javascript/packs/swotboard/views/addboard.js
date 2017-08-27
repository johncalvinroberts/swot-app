import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import AddBoardComponent from '../components/addboard-component'
import React from 'react'

const AddBoard = BaseView.extend({
  component: function(){
    return <AddBoardComponent/>
  },
  pageRender: function(view) {
    let htmlContent = view.render().$el
    this.$el.html(htmlContent)
  }
})

export default AddBoard
