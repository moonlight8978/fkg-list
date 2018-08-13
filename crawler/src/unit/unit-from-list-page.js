const $ = require('cheerio')

const StatParser = require('./list-page/stat-parser')
const SkillParser = require('./list-page/skill-parser')
const AbilitiesParser = require('./list-page/abilities-parser')
const NameVersionParser = require('./list-page/name-version-parser')
const Unit = require('./unit')
const StringUtils = require('../utils/string-utils')

const { attributes, loves, nations } = require('./metadata')

class UnitFromListPage {
  constructor($unit, star) {
    this.star = star
    this.$unit = $unit
  }

  parse() {
    let unit = Unit.initialize({ star: this.star })

    unit.id = this.$unit.children('td:first-child').text().toInt()

    if (!unit.id) {
      return null
    }

    unit.images = Array.from(this.$unit.find('td:nth-child(2) img'))
      .map(imgDOM => $(imgDOM).attr('src'))

    const attributeRaw = this.$unit.children('td:nth-child(3)').text()
    unit.attribute = attributes.get(attributeRaw)

    const { name, version } = NameVersionParser.parse(this.$unit.find('td:nth-child(4) a').text())
    unit.name = name
    unit.version = version

    const nationRaw = this.$unit.find('td:nth-child(5)').text()
    unit.nation = nations.get(nationRaw)

    unit.stats.hp = StatParser.parse(this.$unit.children('td:nth-child(7)').text())
    unit.stats.attack = StatParser.parse(this.$unit.children('td:nth-child(8)').text())
    unit.stats.defense = StatParser.parse(this.$unit.children('td:nth-child(9)').text())
    unit.stats.total = StringUtils.sum([unit.stats.hp, unit.stats.attack, unit.stats.defense])

    unit.speed = this.$unit.find('td:nth-child(10)').text().toInt()

    unit.skill = SkillParser.parse(this.$unit.children('td:nth-child(11)').html())

    unit.abilities = AbilitiesParser.parse(this.$unit.children('td:nth-child(12)').html())

    const loveRaw = this.$unit.children('td:nth-child(13)').text()
    unit.love = loves.get(loveRaw)

    unit.obtainBy = this.$unit.children('td:nth-child(14)').text()

    return unit
  }
}

module.exports = UnitFromListPage
