class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  def index
    @lists = List.all
  end

  def show

  end

  def new
    @list = List.new
    @place = Place.new
  end

  def create
    @list = List.new(list_params)
    #@place = Place.new(place_params)
    @list.user = current_user
    #authorize @list
    if @list.save
      redirect_to new_list_place_path(@list)
    else
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def find_list
    @list = List.find(params[:id])
    #authorize @list
  end

  def list_params
    params.require(:list).permit(:name, :description, :is_public)
  end

  def place_params
    params.require(:list).permit(:place_name, :address, :comment)
  end
end
