import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'


const Types = {
  CARD: 'card'
}

const CardComponent = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('card')
  ],
  render: function(){
    return(
      <div className="card-outer" data-id={this.getModel().get("id")} data-category={this.getModel().get('category')}>{this.getModel().get("description")}</div>
      )
  }
})

export default CardComponent
