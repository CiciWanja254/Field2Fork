class Product < ActiveRecord::Base
    belongs_to :seller, class_name: 'Farmer'
    has_many :carts
end