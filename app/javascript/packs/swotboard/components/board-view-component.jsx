import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import AddCardComponent from './add-card-component'
import CardList from './card-list-component'


const BoardViewComponent = React.createBackboneClass({
  render: function(){
    return (
      <div>
        <h3 className="text-center">{this.getModel().get("name")}</h3>
        <div className="row">
          <CardList board_id={this.getModel().get("id")} category="strengths"/>
          <CardList board_id={this.getModel().get("id")} category="weakness"/>
        </div>
        <div className="row">
          <CardList board_id={this.getModel().get("id")} category="opportunities"/>
          <CardList board_id={this.getModel().get("id")} category="threats"/>
        </div>
      </div>
    )
  }
})

export default BoardViewComponent
