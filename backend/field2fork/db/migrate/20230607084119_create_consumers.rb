class CreateConsumers < ActiveRecord::Migration[7.0]
  def change
    create_table :consumers do |t|
      t.references :user, null: false, foreign_key: true
      t.string :phone_number, null: false
      t.text :address, null: false

      t.timestamps null: false
    end
  end
end
