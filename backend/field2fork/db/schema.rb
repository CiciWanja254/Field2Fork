# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_07_084242) do
  create_table "carts", force: :cascade do |t|
    t.integer "consumer_id"
    t.integer "product_id"
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["consumer_id"], name: "index_carts_on_consumer_id"
    t.index ["product_id"], name: "index_carts_on_product_id"
  end

  create_table "farmers", force: :cascade do |t|
    t.string "farm_name", null: false
    t.integer "user_id", null: false
    t.text "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_farmers_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "sender_type"
    t.integer "sender_id"
    t.string "receiver_type"
    t.integer "receiver_id"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_type", "receiver_id"], name: "index_messages_on_receiver"
    t.index ["sender_type", "sender_id"], name: "index_messages_on_sender"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "consumer_id", null: false
    t.integer "product_id", null: false
    t.integer "quantity", null: false
    t.string "status", limit: 20, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["consumer_id"], name: "index_orders_on_consumer_id"
    t.index ["product_id"], name: "index_orders_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.integer "seller_id"
    t.string "name", null: false
    t.text "description"
    t.decimal "price", precision: 10, scale: 2, null: false
    t.integer "stock_level", default: 0
    t.text "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["seller_id"], name: "index_products_on_seller_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "sender_type"
    t.integer "sender_id"
    t.string "receiver_type"
    t.integer "receiver_id"
    t.integer "rating", null: false
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_type", "receiver_id"], name: "index_reviews_on_receiver"
    t.index ["sender_type", "sender_id"], name: "index_reviews_on_sender"
  end

  create_table "wholesalers", force: :cascade do |t|
    t.string "company_name", null: false
    t.integer "user_id", null: false
    t.string "phone_number", null: false
    t.text "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wholesalers_on_user_id"
  end

  add_foreign_key "carts", "consumers"
  add_foreign_key "carts", "products"
  add_foreign_key "farmers", "users"
  add_foreign_key "orders", "consumers"
  add_foreign_key "orders", "products"
  add_foreign_key "products", "farmers", column: "seller_id"
  add_foreign_key "wholesalers", "users"
end
