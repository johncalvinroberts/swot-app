import Backbone from 'backbone/backbone'
import BaseView from './baseview'
import React from 'react'
import BoardViewComponent from '../components/board-view-component'
import CardListComponent from '../components/card-list-component'
import CardsCollection from '../models/cards-collection'
import CardModel from '../models/card-model'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const BoardView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
  },
  component: function(){
    let component = React.createFactory(BoardViewComponent)
    let board = this.options.board
    let cards = board.attributes.cards
    this.createCategoryView(cards)
    return component({model: board})
  },
  createCategoryView: function(cards){
    let strengths = _.filter(cards, {category: "strengths"})
    let weaknesses = _.filter(cards, {category: "weaknesses"})
    let opportunities = _.filter(cards, {category: "opportunities"})
    let threats = _.filter(cards, {category: "threats"})

    this.makeComponent(strengths, 'strengths'),
    this.makeComponent(weaknesses, 'weaknesses'),
    this.makeComponent(opportunities, 'opportunities'),
    this.makeComponent(threats, 'threats')
  },
  makeComponent: function(array, selector){
    let boardId = this.options.board.attributes.id
    let collection = new CardsCollection()
    collection.set(array)
    let CardList = React.createFactory(CardListComponent)
    let cardList = CardList({
        collection: collection,
        category: selector,
        board_id: boardId})

    _.delay(function(){
      ReactDOM.render(cardList, document.getElementById(selector))
    }, 300)
  }
})

export default BoardView
