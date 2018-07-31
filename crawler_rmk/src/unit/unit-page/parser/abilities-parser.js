const $ = require('cheerio')

const RowParser = require('./row-parser')
const StringUtils = require('../../../utils/string-utils')
const AbilityNewLineFixer = require('../../commons/ability-new-line-fixer')

class AbilitesParser extends RowParser {
  perform() {
    let abilities = []
    this.loopAbilityRows(ability => abilities.push(AbilityNewLineFixer.perform(ability)))
    return abilities
  }

  getAbilitiesCount() {
    return this.$row.children('th').attr('rowspan').toInt()
  }

  loopAbilityRows(doSomethingWithAbility) {
    const abilitiesCount = this.getAbilitiesCount()
    let i = 0
    let $row = this.$row

    while (i < abilitiesCount) {
      const ability = $row.children('td').text()
      doSomethingWithAbility(ability)
      $row = $row.next()
      i += 1
    }
  }
}

module.exports = AbilitesParser
