import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const MainComponent = React.createBackboneClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.boardname}</h1>
        <div id="main-container">
        </div>
      </div>
    )
  }
})

export default MainComponent
