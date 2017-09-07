import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import CardComponent from './card-component'
import CardModel from '../models/card-model'

const CardList = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('cards')
  ],
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
      self.props.collection.add(card)
      console.log('added the card')
    })
  },
  render: function(){
    let cardList = this.getCollection().map((card)=>{
      return <CardComponent model={card} key={card.id} category={this.props.category}/>
    })
    return (
        <div className="col-6">
          {this.props.category}
          <div className="add-card-outer">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="enter description" ref="description"/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
          {cardList}
        </div>
      )
  }
})

export default CardList
