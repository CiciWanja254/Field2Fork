require_relative '../models/user'

class UsersController < Sinatra::Base
  get '/users' do
    users = User.all
    users.map { |user| user.to_json }.to_json
  end

  post '/users' do
    request_body = JSON.parse(request.body.read)
    user = User.create(request_body)
    user.to_json
  end

  get '/users/:id' do |id|
    user = User.find_by(id: id)
    if user
      user.to_json
    else
      status 404
      { error: "User not found with ID #{id}" }.to_json
    end
  end

  patch '/users/:id' do |id|
    user = User.find_by(id: id)
    if user
      request_body = JSON.parse(request.body.read)
      user.update(request_body)
      user.to_json
    else
      status 404
      { error: "User not found with ID #{id}" }.to_json
    end
  end

  delete '/users/:id' do |id|
    user = User.find_by(id: id)
    if user
      user.destroy
      { message: 'User deleted successfully' }.to_json
    else
      status 404
      { error: "User not found with ID #{id}" }.to_json
    end
  end
end
