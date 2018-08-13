const fs = require('fs')
const FileUtils = require('./src/utils/file-utils')
const path = require('path')

const files = FileUtils.readDir('build/images/')
files.forEach(fileName => {
  const filePath = path.join('build/images', fileName)
  const content = FileUtils.read(filePath).toString()
  if (content === 'undefined') {
    fs.unlinkSync(filePath)
  }
})
