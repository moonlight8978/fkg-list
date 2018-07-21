const {
  parseStats,
  parseAbilities,
  splitSkill,
} = require('./string')
const classify = require('./show/classifier')
const processShow = require('./show/processor')

function parseFKG($, row, star) {
  let fkg = {}
  const $row = $(row)

  fkg.id = $row.children('td:first-child').text()

  fkg.star = star

  fkg.images = []
  $row.find('td:nth-child(2) img')
    .each(function(index) {
      fkg.images.push($(this).attr('src'))
    })
  fkg.attribute = $row.children('td:nth-child(3)').text()

  fkg.name = $row.find('td:nth-child(4) a').text()

  fkg.nation = $row.find('td:nth-child(5)').text()

  fkg.hp = parseStats($, $row.children('td:nth-child(7)').text())

  fkg.attack = parseStats($, $row.children('td:nth-child(8)').text())

  fkg.defense = parseStats($, $row.children('td:nth-child(9)').text())

  fkg.speed = $row.children('td:nth-child(10)').text()

  fkg.skill = splitSkill($, $row.children('td:nth-child(11)').html())

  fkg.abilities = parseAbilities($, $row.children('td:nth-child(12)').html())

  fkg.love = $row.children('td:nth-child(13)').text()

  fkg.obtainBy = $row.children('td:nth-child(14)').text()

  return fkg
}

function parseFKGShow($) {
  const $tables = $('.style_table')
  const $rows = $($tables[0]).children('tbody').children('tr')
  const title = $('#content_1_0').text()
  const id = title.match(/(?:No\.)(\d+)(?:\s)/)[1]

  let fkg = {
    id: `${id}000`,
    images: [],
    star: 6,
    obtainBy: 'レアリティ昇華合成',
    version: null
  }

  $rows.each(function() {
    const action = classify($, this)
    const partial = processShow(action)
    Object.assign(fkg, {}, partial)
  })

  return fkg
}

module.exports = { parseFKG, parseFKGShow }
