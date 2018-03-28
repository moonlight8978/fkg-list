require 'rspec'
require_relative '../app/character'
require_relative '../app/character_repository'

RSpec.describe CharacterRepository do
  let(:data) { Hash[x: 2, y: 3] }
  let(:repository) { CharacterRepository.instance }
  before do
    File.open('data.json', 'w') { |file| file.write('') }
  end

  it 'fetch all data' do
    characters = repository.all

    expect(characters).to eq []
  end

  it 'save new data to data.json' do
    new_character = Character.new(data.to_json)
    repository.save(new_character)

    expect(File.read('data.json')).to eq [data].to_json.to_s
  end
end
