Rails.application.routes.draw do
  root to: 'lists#index'

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  resources :users, param: :slug, only: [:show, :index, :new, :create, :update, :edit, :destroy] do
    member do
      get :following, :followers
    end
  end

  resources :lists, only: [ :index, :show, :create, :edit, :new, :update ] do
    resources :list_places, only: [:create, :destroy]
    resources :favourites
  end

  resources :places, only: [:show, :update, :edit, :destroy, :index]

  #resources :listplaces, only: [:new, :create, :destroy]
  resources :favourites, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :relationships, only: [:create, :destroy]
  delete 'lists/:id', to: 'lists#destroy', as: 'delete_list'

  resources :reservations, only: [:show, :edit, :create, :destroy]
  resources :notifications, only: [:index, :show]

end
