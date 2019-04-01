Rails.application.routes.draw do
  devise_for :users
  root to: 'lists#index'
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :lists do
    resources :favourites
    resources :list_places, only: [:create, :destroy]
  end

  resources :places, only: [:show, :update, :edit, :destroy]
  resources :users, only: [:show, :new, :create, :update, :edit, :destroy]
  resources :listplaces, only: [:new, :create, :destroy]
  resources :favourites, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :relationships, only: [:create, :destroy]
end
