import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import CardComponent from './card-component'
import CardModel from '../models/card-model'

const CardList = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('cards')
  ],
  getInitialState: function() {
    return {
      description: '',
      formVisible: false
    }
  },
  handleSubmit: function(e){
    e.preventDefault()
    let self = this
    let description = this.state.description
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
    this.setState({
      description: '',
      formVisible: false
    })
  },
  handleChange: function(e){
    this.setState({description: e.target.value})
  },
  showAddCard: function(){
    this.setState({formVisible: !this.state.formVisible})
  },
  render: function(){
    let cardList = this.getCollection().map((card)=>{
      return <CardComponent model={card} key={card.id} category={this.props.category}/>
    })
    return (
        <div className="cardlist--inner">
          <h3>{this.props.category}</h3>
          <button className="btn add-card-btn" onClick={this.showAddCard}>Add</button>
          <div className="cardlist--list">
          {cardList}
          </div>
          {this.state.formVisible ?
            <div className="add-card-outer">
              <form onSubmit={this.handleSubmit}>
                <textarea type="text" placeholder="enter description" value={this.state.description} onChange={this.handleChange}/>
                <input type="submit" value="Submit" disabled={!this.state.description}/>
              </form>
            </div>
          :null }
        </div>
      )
  }
})

export default CardList
