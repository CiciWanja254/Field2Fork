require_relative '../models/order'

class OrdersController < Sinatra::Base
  get '/orders' do
    orders = Order.all
    orders.map { |order| order.to_json }.to_json
  end

  post '/orders' do
    request_body = JSON.parse(request.body.read)
    order = Order.create(request_body)
    order.to_json
  end

  get '/orders/:id' do |id|
    order = Order.find_by(id: id)
    if order
      order.to_json
    else
      status 404
      { error: "Order not found with ID #{id}" }.to_json
    end
  end

  patch '/orders/:id' do |id|
    order = Order.find_by(id: id)
    if order
      request_body = JSON.parse(request.body.read)
      order.update(request_body)
      order.to_json
    else
      status 404
      { error: "Order not found with ID #{id}" }.to_json
    end
  end

  delete '/orders/:id' do |id|
    order = Order.find_by(id: id)
    if order
      order.destroy
      { message: 'Order deleted successfully' }.to_json
    else
      status 404
      { error: "Order not found with ID #{id}" }.to_json
    end
  end
end
