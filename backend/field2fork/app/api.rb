require 'bundler/setup'
require 'sinatra'
require 'sinatra/activerecord'
require 'rack/cors'

# Add require_relative statements for controllers and models
# Example:
# require_relative 'path/to/controller'
# require_relative 'path/to/model'
require_relative './controllers/carts'
require_relative './models/carts'
require_relative './controllers/consumers'
require_relative './models/consumers'
require_relative './controllers/farmers'
require_relative './models/farmers'
require_relative './controllers/messages'
require_relative './models/messages'
require_relative './controllers/orders'
require_relative './models/orders'
require_relative './controllers/products'
require_relative './models/products'
require_relative './controllers/reviews'
require_relative './models/reviews'
require_relative './controllers/users'
require_relative './models/users'
require_relative './controllers/categories'
require_relative './models/categories'
require_relative './controllers/wholesalers'
require_relative './models/wholesalers'

class Field2fork < Sinatra::Base
    use Rack::Cors do
        allow do
            origins 'http://localhost:3000'
            resource '*', headers: :any, methods: [:get, :post, :put, :delete]
        end
    end

    # Add use statements for controllers
    # Example:
    # use ControllerName
    use CartController
    use ConsumerController
    use FarmerController
    use MessageController
    use OrderController
    use ProductController
    use ReviewController
    use UserController
    use WholesalerController
    use CategoryController

    get '/' do
        { message: 'Hello, World!' }.to_json
    end

end

Field2fork.run!
