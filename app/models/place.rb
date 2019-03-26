class Place < ApplicationRecord
  has_many :listplaces, dependent: :destroy
  has_many :lists, through: :listplaces
end
