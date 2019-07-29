class AddCategoryRatingToLists < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :category, :string
    add_column :lists, :rating, :integer
  end
end
