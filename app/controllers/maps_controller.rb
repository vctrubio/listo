class MapsController < ApplicationController
  def edit
    @map = Map.find(params[:id])
    @user = User.find(params[:id])
  end
end
