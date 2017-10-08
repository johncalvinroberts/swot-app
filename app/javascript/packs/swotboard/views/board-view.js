import BaseView from './baseview'
import React from 'react'
import BoardViewComponent from '../components/board-view-component'
import CardListComponent from '../components/card-list-component'
import CardsCollection from '../models/cards-collection'
import CardModel from '../models/card-model'
import ReactDOM from 'react-dom'
import dragula from 'dragula/dist/dragula.min.js'

const BoardView = BaseView.extend({
  initialize: function(options){
    this.options = options || {}
    this.drake = {}
    this.collectionArray = []
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
    let self = this
    _.delay(function(){
      self.makeComponent(strengths, 'strengths')
      self.makeComponent(weaknesses, 'weaknesses')
      self.makeComponent(opportunities, 'opportunities')
      self.makeComponent(threats, 'threats')
      self.createDraggables()
      }, 300)
  },
  makeComponent: function(array, selector){
    let boardId = this.options.board.attributes.id
    let collection = new CardsCollection()
    collection.category = selector
    this.collectionArray.push(collection)
    collection.set(array)
    let CardList = React.createFactory(CardListComponent)
    let cardList = CardList({
        collection: collection,
        category: selector,
        board_id: boardId
      })

    ReactDOM.render(cardList, document.getElementById(selector))
  },
  createDraggables: function(){
    let self = this
    let cardLists = Array.from(this.$el.find('.cardlist--list'))
    this.drake = dragula(cardLists, {
      copy: false
    })
    this.drake.on('drop', function(el, target, source, sibling) {
      console.log('drop')
      let targetCategory = target.closest('.cardlist--outer').id
      let targetCollection = _.find(self.collectionArray, (cat) => cat.category == targetCategory)
      let ogCollection = _.find(self.collectionArray, (cat) => cat.category === el.dataset.category)
      let ogModel = ogCollection.get(el.dataset.id)
      if(target === source){
        self.changePosition(ogModel)
        return
      }
      ogModel.set({
        category: targetCategory
      })
      targetCollection.add(ogModel, {silent: true})
      ogModel.save().done(function(){
        console.log('eyy')
      })
    })
  },
  changePosition: function(model){
    console.log('pssssitionchange')
  }
})

export default BoardView
