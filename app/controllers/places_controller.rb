class PlacesController < ApplicationController
  def show
  end

  def new
    @place = Place.new
  end

  def create
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
