class Reservation < ApplicationRecord
  belongs_to :place
  belongs_to :user, dependent: :destroy

  has_many :lists, through: :places
end
