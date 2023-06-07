require_relative '../models/farmer'

class FarmersController < Sinatra::Base
  get '/farmers' do
    farmers = Farmer.all
    farmers.map { |farmer| farmer.to_json }.to_json
  end

  post '/farmers' do
    request_body = JSON.parse(request.body.read)
    farmer = Farmer.create(request_body)
    farmer.to_json
  end

  get '/farmers/:id' do |id|
    farmer = Farmer.find_by(id: id)
    if farmer
      farmer.to_json
    else
      status 404
      { error: "Farmer not found with ID #{id}" }.to_json
    end
  end

  patch '/farmers/:id' do |id|
    farmer = Farmer.find_by(id: id)
    if farmer
      request_body = JSON.parse(request.body.read)
      farmer.update(request_body)
      farmer.to_json
    else
      status 404
      { error: "Farmer not found with ID #{id}" }.to_json
    end
  end

  delete '/farmers/:id' do |id|
    farmer = Farmer.find_by(id: id)
    if farmer
      farmer.destroy
      { message: 'Farmer deleted successfully' }.to_json
    else
      status 404
      { error: "Farmer not found with ID #{id}" }.to_json
    end
  end
end
