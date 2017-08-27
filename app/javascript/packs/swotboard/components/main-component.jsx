import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import AddBoardComponent from './addboard-component'
import BoardsComponent from './boards-component'

const MainComponent = React.createBackboneClass({
  handleAddBoard: function(board){
    var boards = this.getCollection()
    boards.add(board)
  },
  render: function(){
    return (
      <div>
        <div id="main-container">
        <div className="navbar"></div>
          <h1>Swotboard</h1>
          <AddBoardComponent addBoard={this.handleAddBoard}/>
          <BoardsComponent boards={this.getCollection()}/>
        </div>
      </div>
    )
  }
})

export default MainComponent
