class AddDateLengthDescriptionTitleCapacityPriceToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :start_time, :datetime
    add_column :places, :length, :time
    add_column :places, :description, :string
    add_column :places, :title, :string
    add_column :places, :capacity, :integer
    add_column :places, :price, :integer

  end
end
