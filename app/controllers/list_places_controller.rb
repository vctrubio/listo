class ListplacesController < ApplicationController
  def create
    raise
    @list = List.find(params[:list_id])
    @list_place = ListPlace.new(listplace_params)
    @list_place.list = @list
    #@list_place.place = Place.new(place_params)
    @list_place.save
    redirect_to edit_list_path(@list)
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
    params.require(:list_place).permit(:comments, place_attributes: [:name])
  end
end

