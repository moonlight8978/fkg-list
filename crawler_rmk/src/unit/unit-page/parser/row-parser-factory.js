const RowParser = require('./row-parser')
const {
  NameParser, VersionParser, AttributeParser, NationParser, LoveParser, SpeedParser
} = require('./info-parser')
const StatsParser = require('./stats-parser')
const SkillParser = require('./skill-parser')
const AbilitesParser = require('./abilities-parser')

const {
  NAME, VERSION, ATTRIBUTE, LOVE, NATION, SPEED, STATS, SKILL, ABILITIES
} = require('../types')

const RowParserFactory = {
  newParser(type, $row) {
    switch (type) {
      case NAME:
        return new NameParser($row)
      case VERSION:
        return new VersionParser($row)
      case ATTRIBUTE:
        return new AttributeParser($row)
      case NATION:
        return new NationParser($row)
      case LOVE:
        return new LoveParser($row)
      case SPEED:
        return new SpeedParser($row)
      case STATS:
        return new StatsParser($row)
      case SKILL:
        return new SkillParser($row)
      case ABILITIES:
        return new AbilitesParser($row)
      default:
        return new RowParser($row)
    }
  }
}

module.exports = RowParserFactory
