class PlacesController < ApplicationController
  def show
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(place_params)
    @list = List.find(params[:list_id])
    #authorize @place
    @place.save
    ListPlace.create({place: @place, list: @list})
    redirect_to list_path(@list)
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def find_place
    @place = Place.find(params[:id])
    #authorize @list
  end

  def place_params
    params.require(:place).permit(:name, :address, :comment)
  end
end
