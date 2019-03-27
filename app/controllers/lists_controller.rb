class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  def index
    @lists = List.all
  end

  def show

  end

  def new
    @list = List.new
    @list.places.build
    @list.list_places.build
  end

  def create

    @list = List.new(list_params.except(:places_attributes, :list_places_attributes))
    @list.user = current_user
    @list.save

    place_hash = {}
    list_params[:places_attributes].each do |k, v|
      place_hash[k] = Place.create(v)
    end
    list_params[:list_places_attributes].each do |k, v|
      list_place = ListPlace.create(v)
      list_place.list = @list
      list_place.place = place_hash[k]
      list_place.save
    end

    #authorize @list
    #raise

    if @list.save!
      #raise
      redirect_to list_path(@list)
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
    params.require(:list).permit(:name, :description, :is_public, places_attributes: [:places, :name, :address], list_places_attributes: [:comments])
  end
end
