class Cart < ActiveRecord::Base
    belongs_to :consumer
    belongs_to :product
end