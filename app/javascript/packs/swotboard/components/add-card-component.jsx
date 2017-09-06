import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import CardModel from '../models/card-model'

const AddCardComponent = React.createBackboneClass({
  handleSubmit: function(e){
    e.preventDefault()
    let self = this
    let description = this.refs.description.value
    let card = new CardModel({
      description: description,
      category: this.props.category,
      board_id: this.props.board_id,
      position: 1
    })
    card.save().done(function(){
      console.log('added the card')
    })
    //also need to add it to collection
  },
  render: function(){
    return(
        <div className="add-card-outer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="enter description" ref="description"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
  }
})

export default AddCardComponent
