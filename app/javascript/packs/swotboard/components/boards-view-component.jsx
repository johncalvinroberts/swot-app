import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import BoardListItem from './board-list-item'
import BoardModel from '../models/board-model'

const BoardsViewComponent = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('boards')
  ],
  handleSubmit: function(e){
    e.preventDefault()
    let self = this
    let name = this.refs.name.value
    let board = new BoardModel({name: name})
    board.save().done(function(){
      console.log('finished that shit')
      self.props.boards.add(board)
    })
    this.refs.name.value = ""
  },
  render: function(){
    let boardList = this.props.boards.map(function(board){
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
