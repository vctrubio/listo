class List < ApplicationRecord
  attr_accessor :place_name, :address, :comment
  belongs_to :user
  has_many :list_places, dependent: :destroy, inverse_of: :list
  has_many :places, through: :list_places
  has_many :favourites, dependent: :destroy
  accepts_nested_attributes_for :list_places
end
