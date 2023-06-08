class Product < ActiveRecord::Base
    belongs_to :seller, polymorphic: true
    has_many :carts
end
