class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :seller, polymorphic: true, null: false
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 10, scale: 2, null: false
      t.text :image
      t.boolean :availability, null: false, default: true

      t.timestamps null: false
    end
  end
end
