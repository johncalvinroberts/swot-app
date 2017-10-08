import React from 'react'
import ReactBackbone from  'react.backbone'
// import LinkedStateMixin from 'react-addons-linked-state-mixin';


const Types = {
  CARD: 'card'
}

const CardComponent = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('card')
  ],
  getInitialState: function() {
    return {
      description: this.getModel().get("description"),
      editing: false
    }
  },
  handleClick: function(e){
    if(e.target.tagName != "INPUT"){
      console.log('did not click inp')
      this.showEditable()
    }
  },
  showEditable: function(){
    this.setState({
      editing: !this.state.editing
    })
  },
  handleInputChange: function(e){
    this.setState({
      description: e.target.value
    })
  },
  render: function(){
    let category = this.getModel().get('category')
    let cardId = this.getModel().get("id")
    return(
      <div onClick={this.handleClick} className="card-outer" data-id={cardId} data-category={category}>
        {this.state.editing ?
          <input type="text" value={this.state.description} onChange={this.handleInputChange} onMouseLeave={this.showEditable} autoFocus/>
        :
        this.state.description
        }
      </div>
      )
  }
})

export default CardComponent
