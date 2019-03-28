class AddPhotoToLists < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :photo, :string
  end
end
