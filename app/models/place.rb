class Place < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_many :list_places, dependent: :destroy, inverse_of: :place
  has_and_belongs_to_many :lists, through: :list_places

  validates :name, presence: true
end
