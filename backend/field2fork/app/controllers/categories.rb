require_relative '../models/categories'

class CategoryController < Sinatra::Base
  get '/categories' do
    categories = Category.all
    categories.map { |category| category.to_json }.to_json
  end
end
