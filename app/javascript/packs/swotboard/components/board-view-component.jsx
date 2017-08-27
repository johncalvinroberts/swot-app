import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'


const BoardViewComponent = React.createBackboneClass({
  render: function(){
    debugger
    return (
      <div>
        <h1>{this.getModel().get("name")}</h1>
      </div>
    )
  }
})

export default BoardViewComponent
