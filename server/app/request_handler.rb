require 'json'

require_relative 'character'
require_relative 'character_repository'

class RequestHandler
  def initialize(app)
    @app = app
  end

  def call(env)
    status, header, body = @app.call(env)

    req = Rack::Request.new(env)
    new_data_string = req.body.read

    new_character = Character.new(new_data_string)
    CharacterRepository.instance.save(new_character)

    [status, header, body]
  end
end
