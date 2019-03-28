class ListPlace < ApplicationRecord
  belongs_to :list
  belongs_to :place
  validates_presence_of :list
  validates_presence_of :place
  accepts_nested_attributes_for :place
end
