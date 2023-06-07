class Farmer < ActiveRecord::Base
    belongs_to :user
    has_many :products, foreign_key: 'seller_id'
    has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
    has_many :received_messages, class_name: 'Message', foreign_key: 'receiver_id'
    has_many :reviews, foreign_key: 'receiver_id'
  end