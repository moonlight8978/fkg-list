const path = require('path')
require('./src/utils/monkey-patching')
global.BUILD_DIR = 'build'

const crawl = require('./src/crawler')
const parse = require('./src/parser')

const queues = [
  { type: 'unit', queuePath: path.join(BUILD_DIR, 'units_queue.txt') },
  { type: 'list', queuePath: path.join(BUILD_DIR, 'lists_queue.json') },
]

const parsingTypes = [
  { type: 'list', dir: path.join(BUILD_DIR, 'lists') },
  { type: 'unit', dir: path.join(BUILD_DIR, 'units') },
]
const parsingOutput = BUILD_DIR

const CRAWL_COMMAND = 'crawl'
const PARSE_COMMAND = 'parse'
const DOWNLOAD_IMAGES_COMMAND = 'download-images'
const HELP_COMMAND = 'help'

function execCrawl() {
  queues.forEach(queue => crawl(queue))
}

function execParse() {
  parse(parsingTypes, parsingOutput)
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
          Download images for offline app
          (Not implemented yet)

      help
          Print usage
  `)
}

function run() {
  switch (getCommand()) {
    case CRAWL_COMMAND:
      return execCrawling()
    case PARSE_COMMAND:
      return execParsing()
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
