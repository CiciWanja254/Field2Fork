class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :seller, foreign_key: { to_table: :farmers }
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 10, scale: 2, null: false
      t.integer :stock_level, default: 0
      t.text :image

      t.timestamps null: false
    end
  end
end
