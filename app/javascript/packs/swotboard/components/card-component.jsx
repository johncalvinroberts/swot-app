import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const CardComponent = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('card')
  ],
  render: function(){
    return(
      <div>This is a card</div>
      )
  }
})

export default CardComponent
