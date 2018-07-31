const $ = require('cheerio')

const RowParser = require('./row-parser')
const StringUtils = require('../../../utils/string-utils')

class StatsParser extends RowParser {
  perform() {
    const $dataRow = this.$row.next()
    
    const hp = $dataRow.children('td:nth-child(3)').text().toInt()
    const attack = $dataRow.children('td:nth-child(5)').text().toInt()
    const defense = $dataRow.children('td:nth-child(7)').text().toInt()
    const total = StringUtils.sum([hp, attack, defense])

    return { hp, attack, defense, total }
  }
}

module.exports = StatsParser
