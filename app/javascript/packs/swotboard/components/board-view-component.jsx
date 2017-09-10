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
      <div className="board-container">
        <h3 className="text-center">{this.getModel().get("name")}</h3>
        <div className="row">
          <div className="col-6 cardlist--outer" id="strengths"></div>
          <div className="col-6 cardlist--outer" id="opportunities"></div>
        </div>
        <div className="row">
          <div className="col-6 cardlist--outer" id="weaknesses"></div>
          <div className="col-6 cardlist--outer" id="threats"></div>
        </div>
      </div>
    )
  }
})

export default BoardViewComponent
