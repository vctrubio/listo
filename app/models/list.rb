class List < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  attr_accessor :place_name, :address, :comment
  belongs_to :user
  has_many :list_places, dependent: :destroy
  has_many :places, through: :list_places
  has_many :favourites, dependent: :destroy
  accepts_nested_attributes_for :places
end
