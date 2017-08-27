import BoardsView from '../views/boards-view'
import BoardView from '../views/board-view'
import BoardsCollection from '../models/boards-collection'
import BoardModel from '../models/board-model'

const BoardsController = function(options){
  let swotBoard = options.swotBoard
  return {
    index: function(){
      console.log('hitting index')
      let boardsCollection = new BoardsCollection()
      let boardsView = new BoardsView({
        boards: boardsCollection
      })
      swotBoard.mainView.pageRender(boardsView)
    },
    show: function(id){
      let board = new BoardModel({
        id: id
      })
      var boardView = new BoardView({
        board: board
      })
      swotBoard.mainView.pageRender(boardView)
    }
  }
}

export default BoardsController
