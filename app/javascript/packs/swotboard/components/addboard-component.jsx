import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import Board from '../models/board-model'

const AddBoardComponent = React.createBackboneClass({
  mixins: [
    React.BackboneMixin("Board"),
  ],
  handleSubmit: function(e){
    e.preventDefault()
    let name = this.refs.name.value
    let board = new Board({name: name})
    this.props.addBoard(board)
  },
  render: function(){
    return(
      <div className="add-board-button">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter name" ref="name"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
})

export default AddBoardComponent
