import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import CardList from './card-list-component'


const BoardViewComponent = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('board')
  ],
  render: function(){
    return (
      <div>
        <h3 className="text-center">{this.getModel().get("name")}</h3>
        <div className="row">
          <div id="strengths"></div>
          <div id="opportunities"></div>
        </div>
        <div className="row">
          <div id="weaknesses"></div>
          <div id="threats"></div>
        </div>
      </div>
    )
  }
})

export default BoardViewComponent
