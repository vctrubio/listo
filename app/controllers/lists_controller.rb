class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  def index
    # @lists = List.all
    @list = List.new()
    if params[:query].present?
      sql_query = "\
      name ILIKE :query \
      OR description ILIKE :query \
      "
      @lists = List.where(sql_query, query: "%#{params[:query]}%")
      # @lists = policy_scope(List).where(sql_query, query: "%#{params[:query]}%")
    else
      @lists = List.all
      # @lists = policy_scope(List).order(created_at: :desc)
    end
  end

  def show
    @places = @list.places.where.not(latitude: nil, longitude: nil)

    @markers = @places.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude
      }
    end
  end

  def new
    @list = List.new # (list_params)
    @list.list_places.build.build_place
    # @list.places.build
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    # authorize @list
    # raise
    if @list.save
      # raise
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
    redirect_to lists_path
  end

  private

  def find_list
    @list = List.find(params[:id])
    # authorize @list
  end

  def list_params
    params.require(:list).permit(:name, :description, :is_public, :photo, list_places_attributes: [:comments, place_attributes: [:name, :address, :photo, :latitude, :longitude]]) # , places_attributes: [:places, :name, :address])
  end
end
