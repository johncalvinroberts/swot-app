class Api::BoardsController < ApplicationController
  def index
    boards = Boards.all
    render json: boards
  end

  def show
    board = Boards.find(params[:id])

    render json: board
  end

  def create
    board = Board.new(board_params)
    if board.save
      render json: board, status: :ok
    else
      render json: board.errors, status: :unprocessable_entity
    end
  end

  def update
    board = Boards.find(params[:id])
    if board.update_attributes(board_params)
      render json: board, status: :ok
    else
      render nothing: true, status: :unprocessable_entity
    end
  end
  private

  def board_params
    params.require(:board).permit(:description, :name)
  end
end
