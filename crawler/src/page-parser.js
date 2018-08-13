const FileUtils = require('./utils/file-utils')

class PageParser {
  constructor(filePath) {
    this.fileName = FileUtils.extractFileName(filePath)
    this.$ = FileUtils.readAndLoad(filePath)
  }

  perform() {}
}

module.exports = PageParser
