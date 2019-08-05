class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:show, :index]

  def index
    # @lists = ListPlace.alls
    if params[:query].present?
      sql_query = "\
      lists.name ILIKE :query \
      OR lists.description ILIKE :query \
      OR places.address ILIKE :query \
      "
      @lists = List.joins(:places).where(sql_query, query: "%#{params[:query]}%").to_a
      @lists.uniq!
    else
      @lists = List.all
      @upvoted = List.where()
    end
  end

  def show
    @places = @list.places.where.not(latitude: nil, longitude: nil)

    @markers = @places.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        place_id: place.id,
        place_name: place.name
      }
    end

  end

  def new
    @list = List.new # (list_params)
    @list.list_places.build.build_place
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    # authorize @list
    if @list.save
      redirect_to edit_list_path(@list)
    else
      render 'lists/index'
    end
  end

  def update
    @list.update(list_params)
    redirect_to list_path(@list)
  end

  def edit
    @list = List.find(params[:id])
    @list_place = ListPlace.new()
    @list_place.build_place
  end

  def destroy
    @list.destroy
    redirect_to root_path
  end

  private

  def find_list
    @list = List.find(params[:id])
  end

  def list_params
       params.require(:list).permit(:name, :description, :category, :photo, :photo_cache, list_places_attributes: [:comments, :attendence, places_attributes: [:name, :address, :photo, :latitude, :longitude, :photo_cache, :phone, :city, :start_time, :length, :capacity, :description, :title, :price]]) # , places_attributes: [:places, :name, :address])
  end
end
