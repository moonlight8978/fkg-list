const $ = require('cheerio')

const StatParser = require('./list-page/stat-parser')
const SkillParser = require('./list-page/skill-parser')
const AbilitiesParser = require('./list-page/abilities-parser')
const Unit = require('./unit')
const StringUtils = require('../utils/string-utils')

const { attributes, loves, nations } = require('./metadata')

class UnitFromListPage {
  constructor($unit, star) {
    this.star = star
    this.$unit = $unit
  }

  parse() {
    let unit = Unit.initialize()

    unit.id = this.$unit.children('td:first-child').text().toInt()

    if (unit.id === null) {
      return undefined
    }

    unit.star = this.star

    unit.images = Array.from(this.$unit.find('td:nth-child(2) img'))
      .map(imgDOM => $(imgDOM).attr('src'))

    const attributeRaw = this.$unit.children('td:nth-child(3)').text()
    unit.attribute = attributes.get(attributeRaw)

    unit.name = this.$unit.find('td:nth-child(4) a').text()

    const nationRaw = this.$unit.find('td:nth-child(5)').text()
    unit.nation = nations.get(nationRaw)

    unit.stats.hp = StatParser.parse(this.$unit.children('td:nth-child(7)').text())
    unit.stats.attack = StatParser.parse(this.$unit.children('td:nth-child(8)').text())
    unit.stats.defense = StatParser.parse(this.$unit.children('td:nth-child(9)').text())
    unit.stats.speed = this.$unit.find('td:nth-child(10)').text().toInt()
    unit.stats.total = StringUtils.sum([unit.stats.hp, unit.stats.attack, unit.stats.defense])

    unit.skill = SkillParser.parse(this.$unit.children('td:nth-child(11)').html())

    unit.abilities = AbilitiesParser.parse(this.$unit.children('td:nth-child(12)').html())

    const loveRaw = this.$unit.children('td:nth-child(13)').text()
    unit.love = loves.get(loveRaw)

    unit.obtainBy = this.$unit.children('td:nth-child(14)').text()

    return unit
  }
}

module.exports = UnitFromListPage
