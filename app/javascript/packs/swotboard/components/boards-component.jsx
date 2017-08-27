import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'

const BoardsComponent = React.createBackboneClass({
  render: function(){
    return <div>
            <div className="boards-list-container"></div>
          </div>
  }
})

export default BoardsComponent
