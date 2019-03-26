class Favourite < ApplicationRecord
  belongs_to :list
  belongs_to :user
end
