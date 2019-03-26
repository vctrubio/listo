class List < ApplicationRecord
  belongs_to :user
  has_many :listplaces, dependent: :destroy
  has_many :places, through: :listplaces
  has_many :favourites, dependent: :destroy
end
