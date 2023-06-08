require_relative '../app/models/users'
require_relative '../app/models/consumers'
require_relative '../app/models/farmers'
require_relative '../app/models/products'
require_relative '../app/models/carts'
require_relative '../app/models/messages'
require_relative '../app/models/orders'
require_relative '../app/models/wholesalers'
require_relative '../app/models/categories'

# Seeds for User
user_1 = User.create(name: "John Doe", email: "johndoe@example.com", profile_image: "user1.jpg")
user_2 = User.create(name: "Jane Smith", email: "janesmith@example.com", profile_image: "user2.jpg")
user_3 = User.create(name: "Mike Johnson", email: "mikejohnson@example.com", profile_image: "user3.jpg")
user_4 = User.create(name: "Sarah Brown", email: "sarahbrown@example.com", profile_image: "user4.jpg")
user_5 = User.create(name: "David Wilson", email: "davidwilson@example.com", profile_image: "user5.jpg")
user_6 = User.create(name: "Sarah Johnson", email: "sarah@example.com", profile_image: "user4.jpg")

# Seeds for Consumer
consumer_1 = Consumer.create(user: user_1, phone_number: "123-456-7890", address: "123 Main St")
consumer_2 = Consumer.create(user: user_2, phone_number: "987-654-3210", address: "456 Elm St")

# Seeds for Farmer
farmer_1 = Farmer.create(farm_name: "Green Acres Farm", user: user_3, phone_no: "1234567890", address: "456 Farm Rd")
farmer_2 = Farmer.create(farm_name: "Sunshine Farm", user: user_4, phone_no: "9876543210", address: "789 Ranch Ln")

# Seeds for Wholesalers
wholesaler_1 = Wholesaler.create(company_name: "Green Acres Wholesale", user: user_5, phone_no: "1112223333", address: "456 Farm Rd")
wholesaler_2 = Wholesaler.create(company_name: "Sunshine Wholesale", user: user_6, phone_no: "4445556666", address: "789 Ranch Ln")

# Seeds for Category
category_1 = Category.create(name: "Red Onion", image: "https://i.pinimg.com/564x/2c/90/35/2c9035c6569737c2a6f1ea57d64fdbcc.jpg");
category_2 = Category.create(name: "Tomatoes", image: "https://i.pinimg.com/564x/62/40/69/6240691f4e08345d127eb4a199e02b2a.jpg");
category_3 = Category.create(name: "Capsicum Green", image: "https://i.pinimg.com/564x/bd/2e/6f/bd2e6febb0d4ec8163f48a35c7eb6b13.jpg");
category_4 = Category.create(name: "Carrots", image: "https://i.pinimg.com/564x/39/49/61/394961fc96c8522ece2b6a5ee425c809.jpg");
category_5 = Category.create(name: "Peas", image: "https://i.pinimg.com/564x/e7/dd/a8/e7dda8e77dd8817051d4e228fa394275.jpg");
category_6 = Category.create(name: "Cabbage", image: "https://i.pinimg.com/564x/63/d4/c1/63d4c1763364e92d0be3d983d99199a0.jpg");
category_7 = Category.create(name: "Matoke Banana", image: "https://i.pinimg.com/564x/95/9c/c5/959cc5dbed21a08a62e89fb80f92a2dc.jpg");
category_8 = Category.create(name: "Potatoes", image: "https://i.pinimg.com/564x/e3/13/85/e31385d8f4991e666b75482b2ba37b38.jpg");
category_9 = Category.create(name: "Garlic", image: "https://i.pinimg.com/564x/20/95/d3/2095d39dfa668f7035bf9aca47c3cefe.jpg");
category_10 = Category.create(name: "Sukuma Wiki", image: "https://i.pinimg.com/564x/36/ff/bc/36ffbc25fe8168e37e7e7bd237516856.jpg");
category_11 = Category.create(name: "Lettuce", image: "https://i.pinimg.com/564x/d7/cb/78/d7cb7876fed31d0e6e76fc8538d4336b.jpg");
category_12 = Category.create(name: "Corriander", image: "https://i.pinimg.com/564x/69/c1/c9/69c1c983951401c32f9ff8f32fd56e94.jpg");
category_13 = Category.create(name: "Cucumber", image: "https://i.pinimg.com/564x/db/12/b8/db12b85796d412aea2e8c6cc5681a49b.jpg");
category_14 = Category.create(name: "French beans", image: "https://i.pinimg.com/564x/0e/61/94/0e6194d4267a6cdea1a8882b2c69e5eb.jpg");
category_15 = Category.create(name: "Broccoli", image: "https://i.pinimg.com/564x/93/1f/fd/931ffdf4fbf5306a60f19fc4a182453b.jpg");
category_16 = Category.create(name: "Mushrooms", image: "https://i.pinimg.com/564x/c3/5c/41/c35c417a140ada9b76fbef64b94798d4.jpg");
category_17 = Category.create(name: "Ginger", image: "https://i.pinimg.com/564x/fd/65/f4/fd65f428864a8389742c264b126fcc11.jpg");
category_18 = Category.create(name: "Avocado", image: "https://i.pinimg.com/564x/2e/a5/98/2ea598f82ff085e3190604c5838a049d.jpg");
category_19 = Category.create(name: "Red Grapes", image: "https://i.pinimg.com/564x/5e/04/de/5e04de53467a91cef8258d67eb88feb6.jpg");
category_20 = Category.create(name: "Apples", image: "https://i.pinimg.com/564x/3e/de/e5/3edee59885d7d797e514515c0e631284.jpg");
category_21 = Category.create(name: "Bananas", image: "https://i.pinimg.com/564x/67/ff/04/67ff0431ed4ecbf10ebed90c15eb6d0a.jpg");
category_22 = Category.create(name: "Mangoes", image: "https://i.pinimg.com/564x/61/4b/41/614b410de3dd4854218a9a96e863625b.jpg");
category_23 = Category.create(name: "Lemon", image: "https://i.pinimg.com/564x/51/41/09/5141097e9d453ec30c1926e05bd80e0a.jpg");
category_24 = Category.create(name: "Pineapple", image: "https://i.pinimg.com/564x/a0/77/c8/a077c84037cd1e27b87d81ad8ca88209.jpg");
category_25 = Category.create(name: "Kiwi", image: "https://i.pinimg.com/564x/cd/53/13/cd53135bb10461fd8c3e9f04d15fd50b.jpg");
category_26 = Category.create(name: "Watermelon", image: "https://i.pinimg.com/564x/f5/52/25/f5522551c5a750869e2453979df67264.jpg");
category_27 = Category.create(name: "Papaya", image: "https://i.pinimg.com/564x/17/d6/1c/17d61c162a283e3e9edf5160fd94fc2c.jpg");
category_28 = Category.create(name: "Tree tomato", image: "https://i.pinimg.com/564x/a5/41/3e/a5413e4a8a10cf5f589868c0ca51d6d2.jpg");
category_29 = Category.create(name: "Pixie", image: "https://i.pinimg.com/564x/16/b8/25/16b8254e11d0d921116b12643f116ef4.jpg");
category_30 = Category.create(name: "Strawberries", image: "https://i.pinimg.com/750x/8c/04/08/8c04089c8c03d7edaf0d2b2ad8046fff.jpg");

# Seeds for Product
product_1 = Product.create(seller: wholesaler_1, name: "Sukuma Wiki", description: "Fresh sukuma wiki", price: 33, availability: true, image: "https://i.pinimg.com/564x/36/ff/bc/36ffbc25fe8168e37e7e7bd237516856.jpg")
product_2 = Product.create(seller: farmer_1, name: "Lettuce", description: "Crisp lettuce", price: 120, availability: true, image: "https://i.pinimg.com/564x/d7/cb/78/d7cb7876fed31d0e6e76fc8538d4336b.jpg")
product_3 = Product.create(seller: wholesaler_1, name: "Tomato Seeds", description: "High-quality tomato seeds for planting", price: 10, availability: true, image: "https://i.pinimg.com/564x/0d/16/8a/0d168a8d32a6a6df4fd899d6d6a2a7a3.jpg")
product_4 = Product.create(seller: farmer_1, name: "Carrot Seeds", description: "Organic carrot seeds for home gardening", price: 8, availability: true, image: "https://i.pinimg.com/564x/16/7a/24/167a244a8fd1c13962a7b623b86264e7.jpg")

# Seeds for Cart
Cart.create(consumer: consumer_1, product: product_1, quantity: 2)
Cart.create(consumer: consumer_1, product: product_2, quantity: 3)

# Seeds for Message
Message.create(sender: farmer_1, sender_type: "Farmer", receiver: consumer_1, receiver_type: "Consumer", message: "Hello, I have some fresh produce available.")
Message.create(sender: consumer_1, sender_type: "Consumer", receiver: farmer_1, receiver_type: "Farmer", message: "I'm interested in buying some vegetables.")
Message.create(sender: farmer_1, sender_type: "Farmer", receiver: consumer_1, receiver_type: "Consumer", message: "We have a sale on fruits this week.")
Message.create(sender: wholesaler_1, sender_type: "Wholesaler", receiver: farmer_1, receiver_type: "Farmer", message: "I'd like to discuss a potential partnership.")

# Seeds for Order
Order.create(consumer: consumer_1, product: product_1, quantity: 2, status: "Pending")
Order.create(consumer: consumer_1, product: product_1, quantity: 3, status: "Shipped")
Order.create(consumer: consumer_2, product: product_2, quantity: 1, status: "Delivered")
Order.create(consumer: consumer_2, product: product_2, quantity: 4, status: "Pending")
