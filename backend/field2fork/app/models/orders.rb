class Order < ActiveRecord::Base
    belongs_to :consumer
    belongs_to :product
  
    validates :quantity, presence: true
    validates :status, presence: true, length: { maximum: 20 }
end
  