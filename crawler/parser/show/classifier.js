const {
  NAME, VERSION, ATTRIBUTE, LOVE, NATION, SPEED, STATS, SKILL, ABILITIES
} = require('./actions')

const NAME_HEADER = '名前'
const VERSION_HEADER = '衣装'
const ATTRIBUTE_HEADER = '属性'
const LOVE_HEADER = '好きな物'
const NATION_HEADER = '所属国家'
const BASIC_STATS_HEADER = '前'
const SKILL_HEADER = /^戦闘スキル$/
const STATS_HEADER = /(^昇華・咲$)|(^昇華・咲\(開花\)$)/
const ABILITIES_HEADER = /(^昇華アビリティ$)|(^昇華アビリティ\(開花\)$)|(^昇華$)/

// Classify row data by its header
function classify($, row) {
  const $row = $(row)
  let action = {
    message: null,
    $: $,
    $row: $row,
  }
  let $header

  $header = $($row.children('th:not([rowspan])')[0])
  const isName = $header.length > 0 &&
    $header.text() === NAME_HEADER

  const isVersion = $header.length > 0 &&
    $header.text() === VERSION_HEADER

  const isAttribute = $header.length > 0 &&
    $header.text() === ATTRIBUTE_HEADER

  const isLove = $header.length > 0 &&
    $header.text() === LOVE_HEADER

  const isNation = $header.length > 0 &&
    $header.text() === NATION_HEADER

  $header = $($row.children('th[rowspan="2"]')[0])
  const isSpeed =
    $header.length > 0 &&
    $header.text() === BASIC_STATS_HEADER

  const isStats =
    $header.length > 0 &&
    $header.text().match(STATS_HEADER)

  $header = $($row.children('th[colspan="2"]')[0])
  const isSkill =
    $header.length > 0 &&
    $header.text().match(SKILL_HEADER)

  const isAbilities =
    $header.length > 0 &&
    $header.text().match(ABILITIES_HEADER)

  if (isName) {
    action.message = NAME
  } else if (isVersion) {
    action.message = VERSION
  } else if (isAttribute) {
    action.message = ATTRIBUTE
  } else if (isLove) {
    action.message = LOVE
  } else if (isNation) {
    action.message = NATION
  } else if (isSpeed) {
    action.message = SPEED
  } else if (isStats) {
    action.message = STATS
  } else if (isSkill) {
    action.message = SKILL
  } else if (isAbilities) {
    action.message = ABILITIES
  }

  return action
}

module.exports = classify
