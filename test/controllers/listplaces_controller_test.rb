require 'test_helper'

class ListplacesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get listplaces_new_url
    assert_response :success
  end

  test "should get create" do
    get listplaces_create_url
    assert_response :success
  end

  test "should get destroy" do
    get listplaces_destroy_url
    assert_response :success
  end

end
