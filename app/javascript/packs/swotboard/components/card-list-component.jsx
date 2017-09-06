import React from 'react'
import ReactBackbone from  'react.backbone'
import PropTypes from 'prop-types'
import AddCardComponent from './add-card-component'

const CardList = React.createBackboneClass({
  render: function(){
    return (
        <div className="col-6">
          {this.props.category}
          <AddCardComponent board_id={this.props.board_id} category={this.props.category}/>
        </div>
      )
  }
})

export default CardList
