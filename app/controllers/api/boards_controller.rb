class Api::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    boards = Board.all
    render json: boards
  end

  def show
    board = Board.find(params[:id])
    cards = Card.where(board_id: board.id)
    response = board.as_json
    response["cards"] = cards.as_json
    render json: response
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
    board = Board.find(params[:id])
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
