const fs = require('fs')
require('./src/utils/monkey-patching')

const PageParserFactory = require('./src/page-parser-factory')

const BUILD_DIR = 'build'
const TYPES = ['list', 'unit']

function functionName() {
  TYPES.map(type => {
    const dir = `${BUILD_DIR}/${type}s`
    const files = fs.readdirSync(dir)
    const units = files.map(file => {
      const parser = PageParserFactory.newParser(type, `${dir}/${file}`)
      console.log(`Parsing ${file}`)
      return parser.perform()
    })
  })

  // for debugging
  // const parser = new ListPageParser('build/lists/★★★★★★.html')
  // const unit = parser.perform()
  // console.log(unit)
}

functionName()
