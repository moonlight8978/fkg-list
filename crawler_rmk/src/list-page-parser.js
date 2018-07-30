const $ = require('cheerio')

const PageParser = require('./page-parser')
const UnitFromListPage = require('./unit/unit-from-list-page')

const TABLE_SELECTOR = '#sortabletable1'
const ROWS_SELECTOR = '#sortabletable1 tbody tr'

class ListPageParser extends PageParser {
  perform() {
    const $units = this.getUnits()
    // const units = Array.from($units).map(unitDOM => this.parseUnit($(unitDOM)))
    const units = this.parseUnit($(this.getUnits().first()))
    console.log(units)
  }

  getUnits() {
    return this.$(ROWS_SELECTOR)
  }

  parseUnit($unit) {
    const rawUnitParser = new UnitFromListPage($unit, this.getStar())
    return rawUnitParser.parse()
  }

  getStar() {
    return this.fileName.split('').length
  }
}

module.exports = ListPageParser
