import BoardsView from '../views/boards-view'
import BoardView from '../views/board-view'
import BoardsCollection from '../models/boards-collection'
import BoardModel from '../models/board-model'

const BoardsController = function(options){
  let swotBoard = options.swotBoard
  return {
    index: function(){
      let boardsCollection = new BoardsCollection()
      boardsCollection.fetch().done(function(){
        console.log('fetched boards')
        let boardsView = new BoardsView({
          boards: boardsCollection
        })
        swotBoard.mainView.pageRender(boardsView)
      })
    },
    show: function(id){
      let board = new BoardModel({
        id: id
      })
      board.fetch().done(function(model, res){
        let boardView = new BoardView({
          board: board
        })
        swotBoard.mainView.pageRender(boardView)
        //render the card lists here??
      })
    }
  }
}

export default BoardsController
