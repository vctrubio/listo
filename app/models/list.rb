class List < ApplicationRecord
  attr_accessor :place_name, :address, :comment
  belongs_to :user
  has_many :list_places, dependent: :destroy
  has_many :places, through: :list_places
  has_many :favourites, dependent: :destroy
  accepts_nested_attributes_for :places
  accepts_nested_attributes_for :list_places
end
