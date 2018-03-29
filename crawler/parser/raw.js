const {
  parseStats,
  parsePassiveSkills,
  splitActiveSkill,
} = require('./string')

function parseFKG($, row, star) {
  let fkg = {};
  const $row = $(row);

  fkg.id = $row.children('td:first-child').text();

  fkg.star = star;

  fkg.images = [];
  $row.find('td:nth-child(2) img')
    .each(function(index) {
      fkg.images.push($(this).data('original'));
    });

  fkg.attribute = $row.children('td:nth-child(3)').text();

  fkg.name = $row.find('td:nth-child(4) a').text();

  fkg.nation = $row.find('td:nth-child(5)').text();

  fkg.hitPoint = parseStats($, $row.children('td:nth-child(7)').text());

  fkg.attack = parseStats($, $row.children('td:nth-child(8)').text());

  fkg.defense = parseStats($, $row.children('td:nth-child(9)').text());

  fkg.speed = $row.children('td:nth-child(10)').text();

  fkg.activeSkill = splitActiveSkill($, $row.children('td:nth-child(11)').html());

  fkg.passiveSkills = parsePassiveSkills($, $row.children('td:nth-child(12)').html());

  fkg.love = $row.children('td:nth-child(13)').text();

  fkg.obtainBy = $row.children('td:nth-child(14)').text();

  return fkg;
}

module.exports = parseFKG;
