const $ = require('cheerio')

const {
  NAME, VERSION, ATTRIBUTE, LOVE, NATION, SPEED, STATS, SKILL, ABILITIES
} = require('./types')

const NAME_HEADER_REGEX = /^名前$/
const VERSION_HEADER_REGEX = /^衣装$/
const ATTRIBUTE_HEADER_REGEX = /^属性$/
const LOVE_HEADER_REGEX = /^好きな物$/
const NATION_HEADER_REGEX = /^所属国家$/
const BASIC_STATS_HEADER_REGEX = /(^前$|^進化前$)/
const SKILL_HEADER_REGEX = /^戦闘スキル$/
const STATS_HEADER_REGEX = /(^昇華・咲$)|(^昇華・咲\(開花\)$)/
const ABILITIES_HEADER_REGEX = /(^昇華アビリティ$)|(^昇華アビリティ\(開花\)$)|(^昇華$)/

const types = [
  { type: NAME,       regex: NAME_HEADER_REGEX },
  { type: VERSION,    regex: VERSION_HEADER_REGEX },
  { type: ATTRIBUTE,  regex: ATTRIBUTE_HEADER_REGEX },
  { type: LOVE,       regex: LOVE_HEADER_REGEX },
  { type: NATION,     regex: NATION_HEADER_REGEX },
  { type: SPEED,      regex: BASIC_STATS_HEADER_REGEX },
  { type: STATS,      regex: STATS_HEADER_REGEX },
  { type: SKILL,      regex: SKILL_HEADER_REGEX },
  { type: ABILITIES,  regex: ABILITIES_HEADER_REGEX },
]

const isRowHeaderMatch = ($row, regex) => {
  const $headers = $row.children('th')
  const noHeader = $headers.length === 0

  if (noHeader) {
    return false
  }

  const isHeaderMatch = regex.test($($headers[0]).text())
  return isHeaderMatch
}

const RowClassifier = {
  perform($row) {
    let matchType

    types.forEach(({ type, regex }) => {
      if (isRowHeaderMatch($row, regex)) {
        matchType = type
      }
    })

    return matchType
  }
}

module.exports = RowClassifier
