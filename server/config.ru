require_relative 'app/request_handler'
require 'rack/cors'

class SimpleWeb
	def self.call(env)
		[
			200,
			{ 'Content-Type' => 'application/json; charset=utf-8' },
			[]
		]
	end
end

use Rack::Cors do
  allow do
    origins 'localhost:3000'
    resource '/*', :headers => :any, :methods => :post
  end
end

use RequestHandler

run SimpleWeb
