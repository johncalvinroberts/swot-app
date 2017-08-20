/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import Backbone from 'backbone/backbone'
import $ from 'jquery/dist/jquery'
import React from 'react'
import Router from './swotboard/router'
import MainView from './swotboard/views/mainview'

const SwotBoard = function(){
  this.initialize()
}

SwotBoard.prototype.initialize = function(){
  this.router = new Router()
  this.mainView = new MainView({
    el: $('#swotboard-root'),
    router: this.router
  })
  this.showApp()
}

SwotBoard.prototype.showApp = function(){
  this.mainView.render()
  Backbone.history.start()
}

document.addEventListener('DOMContentLoaded', () => {
  window.swotBoard = new SwotBoard()
});

