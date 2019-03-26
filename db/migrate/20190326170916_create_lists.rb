class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :name
      t.text :description
      t.integer :likes
      t.references :user, foreign_key: true
      t.boolean :is_public

      t.timestamps
    end
  end
end
