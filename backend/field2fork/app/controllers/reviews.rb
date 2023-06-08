require_relative '../models/review'

class ReviewsController < Sinatra::Base
  get '/reviews' do
    reviews = Review.all
    reviews.map { |review| review.to_json }.to_json
  end

  post '/reviews' do
    request_body = JSON.parse(request.body.read)
    review = Review.create(request_body)
    review.to_json
  end

  get '/reviews/:id' do |id|
    review = Review.find_by(id: id)
    if review
      review.to_json
    else
      status 404
      { error: "Review not found with ID #{id}" }.to_json
    end
  end

  patch '/reviews/:id' do |id|
    review = Review.find_by(id: id)
    if review
      request_body = JSON.parse(request.body.read)
      review.update(request_body)
      review.to_json
    else
      status 404
      { error: "Review not found with ID #{id}" }.to_json
    end
  end

  delete '/reviews/:id' do |id|
    review = Review.find_by(id: id)
    if review
      review.destroy
      { message: 'Review deleted successfully' }.to_json
    else
      status 404
      { error: "Review not found with ID #{id}" }.to_json
    end
  end
end

