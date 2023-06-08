require_relative '../models/consumers'

class ConsumerController < Sinatra::Base
  get '/consumers' do
    consumers = Consumer.all
    consumers.map { |consumer| consumer.to_json }.to_json
  end

  post '/consumers' do
    request_body = JSON.parse(request.body.read)
    consumer = Consumer.create(request_body)
    consumer.to_json
  end

  get '/consumers/:id' do |id|
    consumer = Consumer.find_by(id: id)
    if consumer
      consumer.to_json
    else
      status 404
      { error: "Consumer not found with ID #{id}" }.to_json
    end
  end

  patch '/consumers/:id' do |id|
    consumer = Consumer.find_by(id: id)
    if consumer
      request_body = JSON.parse(request.body.read)
      consumer.update(request_body)
      consumer.to_json
    else
      status 404
      { error: "Consumer not found with ID #{id}" }.to_json
    end
  end

  delete '/consumers/:id' do |id|
    consumer = Consumer.find_by(id: id)
    if consumer
      consumer.destroy
      { message: 'Consumer deleted successfully' }.to_json
    else
      status 404
      { error: "Consumer not found with ID #{id}" }.to_json
    end
  end
end
