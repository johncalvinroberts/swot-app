import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import BoardListItem from './board-list-item'
import Board from '../models/board-model'

const BoardsViewComponent = React.createBackboneClass({
  handleSubmit: function(e){
    e.preventDefault()
    let name = this.refs.name.value
    let board = new Board({name: name})
    this.props.addBoard(board)
  },
  render: function(){
    let boards = this.props.boards
    let boardList = boards.map(function(board){
      return <BoardListItem model={board} key={board.id}/>
    })
    return <div>
            <div className="add-board-button">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter name" ref="name"/>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="boards-list-container">
              <ul>
              { boardList }
              </ul>
            </div>
          </div>
  }
})

export default BoardsViewComponent
