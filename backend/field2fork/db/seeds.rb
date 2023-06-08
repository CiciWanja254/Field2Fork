require_relative '../app/models/users'
require_relative '../app/models/consumers'
require_relative '../app/models/farmers'
require_relative '../app/models/products'
require_relative '../app/models/carts'
require_relative '../app/models/messages'
require_relative '../app/models/orders'

# # Seeds for User
# user_1 = User.create(name: "John Doe", email: "johndoe@example.com", profile_image: "user1.jpg")
# user_2 = User.create(name: "Jane Smith", email: "janesmith@example.com", profile_image: "user2.jpg")
# user_3 = User.create(name: "Mike Johnson", email: "mikejohnson@example.com", profile_image: "user3.jpg")
# user_4 = User.create(name: "Sarah Brown", email: "sarahbrown@example.com", profile_image: "user4.jpg")
# user_5 = User.create(name: "David Wilson", email: "davidwilson@example.com", profile_image: "user5.jpg")

# # Seeds for Consumer
# Consumer.create(user: user_1, phone_number: "123-456-7890", address: "123 Main St")
# Consumer.create(user: user_2, phone_number: "987-654-3210", address: "456 Elm St")

# # Seeds for Farmer
# farm_1 = Farmer.create(farm_name: "Green Acres Farm", user: user_1, address: "456 Farm Rd")
# farm_2 = Farmer.create(farm_name: "Sunshine Farm", user: user_2, address: "789 Ranch Ln")

# # Seeds for Product
# Product.create(seller: user_1, wholesaler_id: 3, name: "Sukuma Wiki", description: "Fresh sukuma wiki", price: 33, stock_level: 55, image: "https://i.pinimg.com/564x/36/ff/bc/36ffbc25fe8168e37e7e7bd237516856.jpg")
# Product.create(seller: user_1, wholesaler_id: 1, name: "Lettuce", description: "Crisp lettuce", price: 120, stock_level: 45, image: "https://i.pinimg.com/564x/d7/cb/78/d7cb7876fed31d0e6e76fc8538d4336b.jpg")

# # Seeds for Cart
# Cart.create(consumer_id: 1, product_id: 1, quantity: 2)
# Cart.create(consumer_id: 2, product_id: 3, quantity: 3)
# Cart.create(consumer_id: 3, product_id: 5, quantity: 1)
# Cart.create(consumer_id: 4, product_id: 2, quantity: 4)
# Cart.create(consumer_id: 5, product_id: 4, quantity: 2)

# # Seeds for Message
# Message.create(sender_id: 1, sender_type: "Farmer", receiver_id: 2, receiver_type: "Consumer", message: "Hello, I have some fresh produce available.")
# Message.create(sender_id: 2, sender_type: "Consumer", receiver_id: 1, receiver_type: "Farmer", message: "I'm interested in buying some vegetables.")
# Message.create(sender_id: 3, sender_type: "Farmer", receiver_id: 4, receiver_type: "Consumer", message: "We have a sale on fruits this week.")
# Message.create(sender_id: 4, sender_type: "Consumer", receiver_id: 5, receiver_type: "Farmer", message: "Do you have any organic options?")
# Message.create(sender_id: 5, sender_type: "Wholesaler", receiver_id: 1, receiver_type: "Farmer", message: "I'd like to discuss a potential partnership.")

# # Seeds for Order
# Order.create(consumer_id: 1, product_id: 1, quantity: 2, status: "Pending")
# Order.create(consumer_id: 2, product_id: 3, quantity: 3, status: "Shipped")
# Order.create(consumer_id: 3, product_id: 5, quantity: 1, status: "Delivered")
# Order.create(consumer_id: 4, product_id: 2, quantity: 4, status: "Pending")
# Order.create(consumer_id: 5, product_id: 4, quantity: 2, status: "Shipped")
