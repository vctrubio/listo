class ReservationsController < ApplicationController

  before_action :authenticate_user!

  def show
  end

  def edit
  end

  def create
    @reservation = Reservation.new
    @reservation.user_id = current_user
    @reservation.place_id = @place
    @reservation.save
  end

  def destroy
  end


end
