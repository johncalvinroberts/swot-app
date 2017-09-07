import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import AddCardComponent from './add-card-component'
import CardComponent from './card-component'

const CardList = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('cards')
  ],
  render: function(){
    debugger
    let cardList = this.getCollection().map(function(card){
      return <CardComponent model={card} key={card.id}/>
    })
    return (
        <div className="col-6">
          {this.props.category}
          <AddCardComponent board_id={this.props.board_id} category={this.props.category}/>
        </div>
      )
  }
})

export default CardList
