import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const MainComponent = React.createBackboneClass({
  handleAddBoard: function(board){
    var boards = this.getCollection()
    boards.add(board)
  },
  render: function(){
    return (
      <div className="container">
        <div className="nav"></div>
        <h1 className="text-center">Swotboard</h1>
        <div id="main-container"></div>
      </div>
    )
  }
})

export default MainComponent
