require 'net/http'
require 'uri'
require 'json'

def mkdir(path)
  Dir.mkdir(path) unless Dir.exist?(path)
end

def download(url, filename)
  uri = URI(url)
  res = Net::HTTP.get_response(uri)
  File.open("build/images/#{filename}.jpg", 'w') do |file|
    file << res.body
  end
end

def import(filepath)
  puts "Importing #{filepath}."
  fkgs = File.open(filepath, 'r') do |file|
    JSON.parse(file.read, symbolize_names: true)
  end
  puts "Successfully imported #{fkgs.size} items"
  fkgs
end

#
#
# Main
mkdir('build/images')

fkgs = import('build/data.json')
puts "Downloading images..."
fkgs.each do |fkg|
  fkg[:images].each.with_index do |url, index|
    download(url, "#{fkg[:id]}_#{index}")
  end
end
puts "Download completed!"