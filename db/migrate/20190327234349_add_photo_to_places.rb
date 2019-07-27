class AddPhotoToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :photo, :string,  :default => "https://res.cloudinary.com/vvrruubb69e/image/upload/v1554225663/product-default.jpg"
  end
end
