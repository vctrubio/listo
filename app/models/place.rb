class Place < ApplicationRecord
  has_many :list_places, dependent: :destroy, inverse_of: :place
  has_many :lists, through: :list_places

  validates :name, presence: true
end
