const ListPageParser = require('./list-page-parser')
const UnitPageParser = require('./unit-page-parser')

const PageParserFactory = {
  newParser(type, filePath) {
    switch (type) {
      case "list":
        return new ListPageParser(filePath)
      case "unit":
        return new UnitPageParser(filePath)
      default:
        return null
    }
  }
}

module.exports = PageParserFactory
