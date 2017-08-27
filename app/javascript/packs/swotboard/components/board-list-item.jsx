import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const BoardListItem = React.createBackboneClass({
  render: function(){
    return (
      <li>{this.getModel().get("name")}</li>
      )
  }
})

export default BoardListItem