const $ = require('cheerio')

const RowParser = require('./row-parser')
const { attributes, loves, nations } = require('../../metadata')

const parseLastCell = $row => {
  const cellDOM = Array.from($row.children('td')).last()
  return $(cellDOM).text()
}

const parseAndMapRawInfo = ($row, map) => {
  const rawInfo = parseLastCell($row)
  return map.get(rawInfo)
}

class NameParser extends RowParser {
  perform() {
    return parseLastCell(this.$row)
  }
}

const normalVersionRegex = /^-$/

class VersionParser extends RowParser {
  perform() {
    const version = parseLastCell(this.$row)
    const isNormalVersion = normalVersionRegex.test(version)

    return isNormalVersion ? null : version
  }
}

class AttributeParser extends RowParser {
  perform() {
    return parseAndMapRawInfo(this.$row, attributes)
  }
}

class NationParser extends RowParser {
  perform() {
    return parseAndMapRawInfo(this.$row, nations)
  }
}

class LoveParser extends RowParser {
  perform() {
    return parseAndMapRawInfo(this.$row, loves)
  }
}

class SpeedParser extends RowParser {
  perform() {
    return parseLastCell(this.$row).toInt()
  }
}

module.exports = {
  NameParser,
  VersionParser,
  AttributeParser,
  NationParser,
  LoveParser,
  SpeedParser,
}
