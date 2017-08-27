import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const BoardListItem = React.createBackboneClass({
  render: function(){
    let link = "/boards/" + this.getModel().get("id")
    return (
      <li>
        <a href={link}>
          {this.getModel().get("name")}
        </a>
      </li>
      )
  }
})

export default BoardListItem
