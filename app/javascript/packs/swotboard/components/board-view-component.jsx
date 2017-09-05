import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import AddCardComponent from './add-card-component'


const BoardViewComponent = React.createBackboneClass({
  render: function(){
    return (
      <div>
        <h1>{this.getModel().get("name")}</h1>
        <AddCardComponent>
        <div id="cards-container">

        </div>
      </div>
    )
  }
})

export default BoardViewComponent
