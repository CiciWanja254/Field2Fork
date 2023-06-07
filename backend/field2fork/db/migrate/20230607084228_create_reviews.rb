class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :sender, polymorphic: true
      t.references :receiver, polymorphic: true
      t.integer :rating, null: false
      t.text :comment

      t.timestamps null: false
    end
  end
end
