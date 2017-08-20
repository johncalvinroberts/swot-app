import Backbone from 'backbone/backbone'
import ReactDOM from 'react-dom'

const BaseView = Backbone.View.extend({
  initialize: function (options) {
    this.options = options || {}
  },
  component: function () {
    return null
  },
  render: function () {
    ReactDOM.render(this.component(), this.el)
    return this
  }
})


export default BaseView
