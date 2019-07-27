module ApplicationHelper
  def user_facebook
    @user_facebook = "http://www.facebook.com/" + @user.facebook
  end
end




    # instagram_url = "http://www.instagram.com/" + @user.instagram
    # @user.instagram = instagram_url
    # twitter_url = "http://www.twitter.com/" + @user.twitter
    # @user.twitter = twitter_url
