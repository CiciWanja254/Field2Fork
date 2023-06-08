require_relative '../models/messages'

class MessageController < Sinatra::Base
  get '/messages' do
    messages = Message.all
    messages.map { |message| message.to_json }.to_json
  end

  post '/messages' do
    request_body = JSON.parse(request.body.read)
    message = Message.create(request_body)
    message.to_json
  end

  get '/messages/:id' do |id|
    message = Message.find_by(id: id)
    if message
      message.to_json
    else
      status 404
      { error: "Message not found with ID #{id}" }.to_json
    end
  end

  patch '/messages/:id' do |id|
    message = Message.find_by(id: id)
    if message
      request_body = JSON.parse(request.body.read)
      message.update(request_body)
      message.to_json
    else
      status 404
      { error: "Message not found with ID #{id}" }.to_json
    end
  end

  delete '/messages/:id' do |id|
    message = Message.find_by(id: id)
    if message
      message.destroy
      { message: 'Message deleted successfully' }.to_json
    else
      status 404
      { error: "Message not found with ID #{id}" }.to_json
    end
  end
end
