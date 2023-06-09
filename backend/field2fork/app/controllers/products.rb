require_relative '../models/products'
require_relative '../models/wholesalers'
require_relative '../models/farmers'

class ProductController < Sinatra::Base
  get '/products' do
    products = Product.includes(:seller).all

    # Convert products, farmers, and wholesalers to JSON
    products_json = products.map do |product|
      {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        seller_type: product.seller_type,
        seller: product.seller.to_json,
        availability: product.availability,
        image: product.image
      }
    end

    products_json.to_json
  end
    
  get '/products/:seller_type/:seller_id' do |seller_type, seller_id|
    products = Product.where(seller_type: seller_type, seller_id: seller_id)
    puts products

    if products.any?
      products.map { |product| { 
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        seller_type: product.seller_type,
        seller: product.seller.to_json,
        availability: product.availability,
        image: product.image
      } }.to_json
    else
      status 404
      { error: "No products found for #{seller_type} with ID #{seller_id}" }.to_json
    end
  end
  
  post '/products' do
    request_body = JSON.parse(request.body.read)
    product = Product.create(request_body)
    product.to_json
  end

  get '/products/:id' do |id|
    product = Product.find_by(id: id)
    if product
      product.to_json
    else
      status 404
      { error: "Product not found with ID #{id}" }.to_json
    end
  end

  patch '/products/:id' do |id|
    product = Product.find_by(id: id)
    if product
      request_body = JSON.parse(request.body.read)
      product.update(request_body)
      product.to_json
    else
      status 404
      { error: "Product not found with ID #{id}" }.to_json
    end
  end

  delete '/products/:id' do |id|
    product = Product.find_by(id: id)
    if product
      product.destroy
      { message: 'Product deleted successfully' }.to_json
    else
      status 404
      { error: "Product not found with ID #{id}" }.to_json
    end
  end
end
