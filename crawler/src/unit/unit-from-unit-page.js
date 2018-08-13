const $ = require('cheerio')

const Unit = require('./unit')
const RowClassifier = require('./unit-page/row-classifier')
const RowParserFactory = require('./unit-page/parser/row-parser-factory')

class UnitFromUnitPage {
  constructor($rows, id) {
    this.$rows = $rows
    this.id = id
  }

  parse() {
    let unit = Unit.initialize({ id: this.id, star: 6 })

    Array.from(this.$rows).forEach(rowDOM => {
      const partial = this.classifyAndParseRow(rowDOM)
      if (partial.type && partial.value) {
        Object.assign(unit, {}, { [partial.type.toLowerCase()]: partial.value })
      }
    })

    return unit
  }

  classifyAndParseRow(rowDOM) {
    const $row = $(rowDOM)
    const type = RowClassifier.perform($row)
    const parser = RowParserFactory.newParser(type, $row)
    return { type, value: parser.perform() }
  }

  static fix(unit, original) {
    return Object.assign(unit, {}, {
      id: unit.id * 1000000,
      images: original.images,
      obtainBy: original.obtainBy,
    })
  }
}

module.exports = UnitFromUnitPage
