const $ = require('cheerio')

const PageParser = require('./page-parser')
const UnitFromListPage = require('./unit/unit-from-list-page')

const TABLE_SELECTOR = '#sortabletable1'
const ROWS_SELECTOR = '#sortabletable1 tbody tr'

class ListPageParser extends PageParser {
  perform() {
    const $units = this.getUnits()
    const units = Array.from($units)
      .map((unitDOM, index) => {
        console.log(`Row ${index + 1}`)
        return this.parseUnit($(unitDOM))
      })
      .filter(unit => unit !== undefined)

    return units

    // for debugging
    // const unit = this.parseUnit($(this.getUnits().first()))
    // return unit
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
