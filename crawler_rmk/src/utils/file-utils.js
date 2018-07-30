const fs = require('fs')
const cheerio = require('cheerio')

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
  }
}

module.exports = FileUtils
