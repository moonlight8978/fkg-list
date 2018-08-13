const $ = require('cheerio')

const RowParser = require('./row-parser')
const StringUtils = require('../../../utils/string-utils')

class SkillParser extends RowParser {
  perform() {
    const name = this.getSkillName()
    const triggerRate = this.getSkillTriggerRate()
    const description = this.getSkillDescription()
    return { name, triggerRate, description }
  }

  getSkillName() {
    const cellDOM = this.$row.children('td').first()
    return $(cellDOM).text()
  }

  getSkillDescription() {
    const $row = this.$row.next().next().next()
    const cellDOM = $row.children('td').first()
    return $(cellDOM).text()
  }

  getSkillTriggerRate() {
    const $row = this.$row.next().next()
    const cellDOM = $row.children('td').last()
    return $(cellDOM).text()
  }
}

module.exports = SkillParser
