require 'bundler/setup'
require 'sinatra'
require './sinatra/activerecord'

# Add require_relative statements for controllers and models
# Example:
# require_relative 'path/to/controller'
# require_relative 'path/to/model'

class Field2fork < Sinatra::Base
    # Add use statements for controllers
    # Example:
    # use ControllerName

    get '/' do
        { message: 'Hello, World!' }.to_json
    end

end

Field2fork.run!
