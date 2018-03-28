require 'rspec'
require_relative '../app/character'

RSpec.describe Character do
  let(:data) { Hash[x: 2, y: 3] }

  it 'parse data from json' do
    character = Character.from_json(data.to_json)

    expect(character['x']).to eq 2
    expect(character['y']).to eq 3
  end
end
