class Place < ApplicationRecord
  has_many :list_places, dependent: :destroy
  has_many :lists, through: :list_places
end
