class FavouritesController < ApplicationController
  before_action :find_list
  before_action :find_favourite, only: [:destroy]

  def create
    if already_favourited?
      flash[:notice] = "You can't favourite more than once"
    else
      @list.favourites.create(user_id: current_user.id)
    end
    redirect_to list_path(@list)
  end

  def destroy
    if !already_favourited?
      flash[:notice] = "Cannot unfavourite"
    else
      @favourite.destroy
    end
    redirect_to list_path(@list)
  end

  private

  def find_favourite
    @favourite = @list.favourites.find(params[:id])
  end

  def find_list
    @list = List.find(params[:list_id])
  end

  def already_favourited?
    Favourite.where(user_id: current_user.id, list_id: params[:list_id]).exists?
  end
end
