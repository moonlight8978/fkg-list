const {
  NAME, VERSION, ATTRIBUTE, LOVE, NATION, SPEED, STATS, SKILL, ABILITIES
} = require('./actions')

const { fixAbilities } = require('../string')

// Excute appropriate function with action name
function processShow({ message, $, $row }) {
  switch (message) {
    case NAME:
      return { name: parseInfo($, $row) }
    case VERSION:
      return { version: parseInfo($, $row, (data) => data.replace('+', '')) }
    case ATTRIBUTE:
      return { attribute: parseInfo($, $row) }
    case LOVE:
      return { love: parseInfo($, $row) }
    case NATION:
      return { nation: parseInfo($, $row) }
    case SPEED:
      return { speed: parseSpeed($, $row) }
    case STATS:
      return parseStats($, $row)
    case SKILL:
      return { skill: parseSkill($, $row) }
    case ABILITIES:
      return { abilities: { blooming: parseAbilities($, $row) } }
    default:
      return {}
  }
}

// The info at top-right of table
function parseInfo($, $row, callback) {
  let data = $row.children('td[colspan="3"]').text()
  if (callback) {
    data = callback(data)
  }
  return data
}

// Get the speed of row
function parseSpeed($, $row) {
  const speed = $row.children('td:last-child').text()
  return speed
}

// Get maxLevel/bonus hp, attack, defense from row (and next rows)
function parseStats($, $row) {
  let bonuses = []
  $row.children('td[rowspan="2"]').each(function(i) {
    bonuses.push($(this).text().replace('+', ''))
  })
  const $dataRow = $row.next()
  const hp = $dataRow.find('td:nth-child(2)').text()
  const attack = $dataRow.find('td:nth-child(4)').text()
  const defense = $dataRow.find('td:nth-child(6)').text()
  return {
    hp: {
      maxLevel: [hp],
      bonus: [bonuses[0]],
    },
    attack: {
      maxLevel: [attack],
      bonus: [bonuses[1]],
    },
    defense: {
      maxLevel: [defense],
      bonus: [bonuses[2]],
    }
  }
}

// Get abilities from row
// Remove fixAbilities if want old version
function parseAbilities($, $row) {
  const numbersOfAbilities = parseInt($row.children('th').attr('rowspan'))
  let abilities = []
  while (abilities.length < numbersOfAbilities) {
    const ability = $row.children('td').text()
    abilities.push(ability)
    $row = $row.next()
  }
  return fixAbilities(abilities)
}

// Get skill from row
function parseSkill($, $row) {
  const name = $row.children('td:nth-child(2)').text()
  const $shouka = $row.next().next()
  const triggerRate = $shouka.children('td:nth-child(2)').text()
  const description = $shouka.next().children('td:nth-child(1)').text()
  return { name, triggerRate, description }
}

module.exports = processShow
