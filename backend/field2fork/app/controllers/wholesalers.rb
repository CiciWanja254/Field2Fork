require_relative '../models/wholesaler'

class WholesalersController < Sinatra::Base
  get '/wholesalers' do
    wholesalers = Wholesaler.all
    wholesalers.map { |wholesaler| wholesaler.to_json }.to_json
  end

  post '/wholesalers' do
    request_body = JSON.parse(request.body.read)
    wholesaler = Wholesaler.create(request_body)
    wholesaler.to_json
  end

  get '/wholesalers/:id' do |id|
    wholesaler = Wholesaler.find_by(id: id)
    if wholesaler
      wholesaler.to_json
    else
      status 404
      { error: "Wholesaler not found with ID #{id}" }.to_json
    end
  end

  patch '/wholesalers/:id' do |id|
    wholesaler = Wholesaler.find_by(id: id)
    if wholesaler
      request_body = JSON.parse(request.body.read)
      wholesaler.update(request_body)
      wholesaler.to_json
    else
      status 404
      { error: "Wholesaler not found with ID #{id}" }.to_json
    end
  end

  delete '/wholesalers/:id' do |id|
    wholesaler = Wholesaler.find_by(id: id)
    if wholesaler
      wholesaler.destroy
      { message: 'Wholesaler deleted successfully' }.to_json
    else
      status 404
      { error: "Wholesaler not found with ID #{id}" }.to_json
    end
  end
end
