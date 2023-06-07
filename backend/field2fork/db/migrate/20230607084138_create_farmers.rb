class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :farm_name, null: false
      t.references :user, null: false, foreign_key: true
      t.text :address, null: false

      t.timestamps null: false
    end
  end
end
