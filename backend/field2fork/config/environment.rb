# Set the default RACK_ENV to 'development' if it's not already set
ENV['RACK_ENV'] ||= 'development'

# Load the necessary gems and dependencies based on the RACK_ENV
require 'bundler/setup'
Bundler.require(:default, ENV['RACK_ENV'])
