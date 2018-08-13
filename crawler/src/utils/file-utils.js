const fs = require('fs')
const cheerio = require('cheerio')

const KEEP_FILE = '.keep'

const FileUtils = {
  read(filePath) {
    return fs.readFileSync(filePath)
  },

  readAndLoad(filePath) {
    const content = this.read(filePath)
    return cheerio.load(content)
  },

  extractFileName(filePath) {
    const fullName = filePath.split('/').pop()
    return fullName.split('.').first()
  },

  readDir(dir) {
    const files = fs.readdirSync(dir)
    return files.filter(file => !isKeepFile(file))
  },

  remove(filePath) {
    return fs.unlinkSync(filePath)
  }
}

function isKeepFile(file) {
  return file === KEEP_FILE
}

module.exports = FileUtils
