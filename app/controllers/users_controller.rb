class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update]

  def show
  end

  def new
  end

  def create
  end

  def update
    @user.update(list_params)
    if @user.save
      redirect_to current_user
    else
      render :new
    end
  end

  def edit
  end

  def destroy
  end

  private

  def find_user
    @user = User.find(params[:id])
    # authorize @user
  end

  def list_params
    params.require(:user).permit(:username, :photo)
  end
end
