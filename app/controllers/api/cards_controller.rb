class Api::CardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    cards = Card.all
    render json: cards
  end

  def show
    card = Card.find(params[:id])
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card, status: :ok
    else
      render json: card.errors, status: :unprocessable_entity
    end
  end

  def update
    card = Card.find(params[:id])
    if card.update_attributes(card_params)
      render json: card, status: :ok
    else
      render nothing: true, status: :unprocessable_entity
    end
  end

  private

  def card_params
    params.require(:card).permit(:description, :board_id, :category, :position)
  end
end
