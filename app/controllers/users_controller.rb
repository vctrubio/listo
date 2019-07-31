class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update]
  skip_before_action :authenticate_user!, only: [:show]

  def show
  end

  def new
  end

  def index
    @users = User.all
  end

  def create
    #User.create(slug: to_slug(:username))
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
    @user = User.find_by(slug: params[:slug])
    # authorize @user
  end

  def user_params
    params.require(:user).permit(:username, :photo, :slug,
                                 :full_name, :email, :location, :bio, :twitter, :facebook, :instagram, :website)
  end
end
