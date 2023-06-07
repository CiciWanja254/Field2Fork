require_relative '../models/carts'
require 'json'

class CartController < Sinatra::Base
  get '/carts' do
    @carts = Cart.all
    @carts.to_json
  end

  post '/carts' do
    cart = Cart.new(params[:cart])
    if cart.save
      { message: 'Cart created successfully', cart: cart }.to_json
    else
      { error: 'Failed to create cart' }.to_json
    end
  end

  get '/carts/:id' do
    @cart = Cart.find(params[:id])
    @cart.to_json
  end

  get '/carts/:id/edit' do
    { message: 'Edit cart form' }.to_json
  end

  patch '/carts/:id' do
    cart = Cart.find(params[:id])
    if cart.update(params[:cart])
      { message: 'Cart updated successfully', cart: cart }.to_json
    else
      { error: 'Failed to update cart' }.to_json
    end
  end

  delete '/carts/:id' do
    cart = Cart.find(params[:id])
    cart.destroy
    { message: 'Cart deleted successfully' }.to_json
  end
end
