import BoardsView from '../views/boards-view'
import BoardView from '../views/board-view'
import BoardsCollection from '../models/boards-collection'

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
      console.log(id)
    }
  }
}

export default BoardsController
