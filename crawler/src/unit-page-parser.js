const PageParser = require('./page-parser')

const UnitFromUnitPage = require('./unit/unit-from-unit-page')

const ROWS_SELECTOR = '.style_table:first-child tbody tr'

const idRegex = /(?:No\.)(\d+)(?:.*)/

class UnitPageParser extends PageParser {
  perform() {
    const $rows = this.getUnitTableRows()
    const unitId = this.getUnitId()
    const unitParser = new UnitFromUnitPage($rows, unitId)
    return unitParser.parse()
  }

  getUnitTableRows() {
    return this.$(ROWS_SELECTOR)
  }

  getUnitId() {
    const title = this.$('#content_1_0').text()
    const id = title.match(idRegex)[1]
    return id.toInt()
  }
}

module.exports = UnitPageParser
