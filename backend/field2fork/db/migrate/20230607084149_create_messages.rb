class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :sender, polymorphic: true, null: false
      t.references :receiver, polymorphic: true, null: false
      t.text :message
      t.timestamps null: false
    end
  end
end
