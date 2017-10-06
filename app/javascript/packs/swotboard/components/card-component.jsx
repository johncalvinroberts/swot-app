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
      <div className="card-outer">{this.getModel().get("description")}</div>
      )
  }
})

export default CardComponent
