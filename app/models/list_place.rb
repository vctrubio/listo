class ListPlace < ApplicationRecord
  belongs_to :list
  belongs_to :place

  validates_presence_of :list
  validates_presence_of :place
end
