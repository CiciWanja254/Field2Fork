class User < ActiveRecord::Base
    has_one :farmer
    has_one :wholesaler
    has_one :consumer
end