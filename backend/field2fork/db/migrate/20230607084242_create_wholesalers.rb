class CreateWholesalers < ActiveRecord::Migration[7.0]
  def change
    create_table :wholesalers do |t|
      t.string :company_name, null: false
      t.references :user, null: false, foreign_key: true
      t.string :phone_no, null: false
      t.text :address, null: false

      t.timestamps null: false
    end
  end
end

