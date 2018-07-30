const $ = require('cheerio')

const StatParser = require('./list-page/stat-parser')
const SkillParser = require('./list-page/skill-parser')
const AbilitiesParser = require('./list-page/abilities-parser')

class UnitFromListPage {
  constructor($unit, star) {
    this.star = star
    this.$unit = $unit
  }

  parse() {
    let unit = {}
    unit.id = this.$unit.children('td:first-child').text()

    unit.star = this.star

    unit.images = Array.from(this.$unit.find('td:nth-child(2) img'))
      .map(imgDOM => $(imgDOM).attr('src'))

    unit.attribute = this.$unit.children('td:nth-child(3)').text()

    unit.name = this.$unit.find('td:nth-child(4) a').text()

    unit.nation = this.$unit.find('td:nth-child(5)').text()

    unit.hp = StatParser.parse(this.$unit.children('td:nth-child(7)').text())
    unit.attack = StatParser.parse(this.$unit.children('td:nth-child(8)').text())
    unit.defense = StatParser.parse(this.$unit.children('td:nth-child(9)').text())
    unit.speed = this.$unit.find('td:nth-child(10)').text()

    unit.skill = SkillParser.parse(this.$unit.children('td:nth-child(11)').html())

    unit.abilities = AbilitiesParser.parse(this.$unit.children('td:nth-child(12)').html())

    unit.love = this.$unit.children('td:nth-child(13)').text()

    unit.obtainBy = this.$unit.children('td:nth-child(14)').text()

    return unit
  }
}

module.exports = UnitFromListPage
