require_relative '../models/products'

class ProductController < Sinatra::Base
  get '/products' do
    products = Product.all
    products.map { |product| product.to_json }.to_json
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
