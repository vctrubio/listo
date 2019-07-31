class ListPlacesController < ApplicationController
  def create
    @list = List.find(params[:list_id])
    @list_place = ListPlace.new(listplace_params)
    @list_place.list = @list
    #@list_place.place = Place.new(place_params)

    @list_place.save

    respond_to do |format|
      format.html { redirect_to edit_list_path(@list) }
      format.js  # <-- will render `app/views/reviews/create.js.erb`
    end

  end

  def destroy
    @list = List.find(params[:list_id])
    @list_place = ListPlace.find(params[:id])
    @list_place.destroy

    # no need for app/views/restaurants/destroy.html.erb
    redirect_to edit_list_path(@list)
  end

  private

  def listplace_params
    params.require(:list_place).permit(:comments, :attendence, place_attributes: [:name, :address, :photo, :photo_cache, :latitude, :longitude, :phone, :city, :start_time, :length, :capacity, :description, :title, :price])
  end
end

