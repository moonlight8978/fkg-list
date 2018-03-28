require 'json'

class Character
  attr_reader :data

  def initialize(character_json)
    @data = JSON.parse(character_json)
  end

  def self.from_json(character_json)
    self.new(character_json)
  end

  def [](key)
    data[key]
  end

  def save
    current_data = File.read('data.json')
    current_data = "null" if current_data.empty?
    characters = JSON.parse(current_data)
    characters ||= Array.new
    characters.push(data)
    File.open('data.json', 'w') { |file| file.write(characters.to_json) }
  end
end
