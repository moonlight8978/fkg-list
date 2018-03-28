require 'singleton'

class CharacterRepository
  include Singleton

  def initialize
    @characters = File.read('data.json')
    @characters = "null" if @characters.empty?
    @characters = JSON.parse(@characters)
    @characters ||= Array.new
  end

  def all
    characters
  end

  def save(new_character)
    characters.push(new_character.data)
    File.open('data.json', 'w') { |file| file.write(characters.to_json) }
  end

private

  attr_reader :characters
end
