class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update]

  def show
  end

  def new
  end

  def create
  end

  def update
    @user.update(user_params)
    if @user.save
      redirect_to current_user
    else
      render :edit
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

  def user_params
    params.require(:user).permit(:username, :photo,
                                 :full_name, :email, :location, :bio, :twitter, :facebook, :instagram, :linkedin, :website)
  end
end
