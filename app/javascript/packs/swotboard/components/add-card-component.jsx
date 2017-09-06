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
    /*
      Also need to add the card to a collection here,
      not sure if should have collection be for all cards, or collection for each category
      also not sure if cards should be pulled with the board(active model serializer)
      or pulled as a collection itself...
      i'm leaning towards having them be pulled with the board, then 4 card collections are
      instantiated. individual cards are saved/updated to DB on restful endpoint by self.
    */
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
