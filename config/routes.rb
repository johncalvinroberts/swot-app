Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "main#index"
  resource :root, only: [:index]
  namespace :api do
    resources :boards, only: [:index, :show, :create, :update]
    resources :cards, only: []
    resources :comments, only: [:index, :create, :destroy]
  end

end
