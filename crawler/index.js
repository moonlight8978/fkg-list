const path = require('path')
require('./src/utils/monkey-patching')
global.BUILD_DIR = 'build'

const crawl = require('./src/crawler')
const parse = require('./src/parser')
const { downloadImages, removeBrokenImages } = require('./src/images-downloader')

const queues = [
  { type: 'unit', queuePath: path.join(BUILD_DIR, 'units_queue.txt') },
  { type: 'list', queuePath: path.join(BUILD_DIR, 'lists_queue.json') },
]

const parsingTypes = [
  { type: 'list', dir: path.join(BUILD_DIR, 'lists') },
  { type: 'unit', dir: path.join(BUILD_DIR, 'units') },
]
const parsingOutput = path.join(BUILD_DIR, 'data.json')

const CRAWL_COMMAND = 'crawl'
const PARSE_COMMAND = 'parse'
const DOWNLOAD_IMAGES_COMMAND = 'download-images'
const REMOVE_BROKEN_IMAGES_COMMAND = 'remove-broken-images'
const HELP_COMMAND = 'help'

function execCrawl() {
  queues.forEach(queue => crawl(queue))
}

function execParse() {
  parse(parsingTypes, parsingOutput)
}

function execDownloadImages() {
  downloadImages(parsingOutput)
}

function execRemoveBrokenImages() {
  removeBrokenImages()
}

function execHelp() {
  console.log(`
USAGE:
      yarn start <command>

COMMANDS:
      crawl
          Crawl required html files from https://フラワーナイトガール.攻略wiki.com

      parse
          Parse html files into JSON array

      download-images
          Download images for offline usage

      remove-broken-images
          Remove broken images when download

      help
          Print usage
  `)
}

function run() {
  switch (getCommand()) {
    case CRAWL_COMMAND:
      return execCrawl()
    case PARSE_COMMAND:
      return execParse()
    case DOWNLOAD_IMAGES_COMMAND:
      return execDownloadImages()
    case REMOVE_BROKEN_IMAGES_COMMAND:
      return execRemoveBrokenImages()
    case HELP_COMMAND:
      return execHelp()
    default:
      return execHelp()
  }
}

function getCommand() {
  return process.argv.last()
}

run()
