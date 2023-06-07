SeedCart.create(consumer_id: your_consumer_id,
    product_id: your_product_id,
    quantity: your_quantity,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  FarmerSeed.create(
    farm_name: your_farm_name,
    user_id: your_user_id,
    address: your_address,
    created_at: your_created_at,
    updated_at: your_updated_at
  )
  
  Message.create(
    sender_type: your_sender_type,
    sender_id: your_sender_id,
    receiver_type: your_receiver_type,
    receiver_id: your_receiver_id,
    message: your_message,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  Order.create(
    consumer_id: your_consumer_id,
    product_id: your_product_id,
    quantity: your_quantity,
    status: your_status,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  Product.create(
    seller_id: your_seller_id,
    name: your_name,
    description: your_description,
    price: your_price,
    stock_level: your_stock_level,
    image: your_image,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  Review.create(
    sender_type: your_sender_type,
    sender_id: your_sender_id,
    receiver_type: your_receiver_type,
    receiver_id: your_receiver_id,
    rating: your_rating,
    comment: your_comment,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  User.create(
    name: your_name,
    email: your_email,
    profile_image: your_profile_image,
    created_at: your_created_at,
    updated_at: your_updated_at
  )

  Wholesaler.create(
    company_name: your_company_name,
    user_id: your_user_id,
    phone_number: your_phone_number,
    address: your_address,
    created_at: your_created_at,
    updated_at: your_updated_at
  )