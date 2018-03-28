const fs = require('fs')
const cheerio = require('cheerio')
const { Map } = require('immutable')

const template = require('./template')

const files = [
  './build/★★★★★★.html',
  './build/★★★★★.html',
  './build/★★★★.html',
  './build/★★★.html',
  './build/★★.html',
];

fs.readFile(files[0], function read(error, data) {
  if (error) {
    return console.log(error)
  }
  const $ = cheerio.load(data)

  const $rows = $('#sortabletable1 > tbody > tr')

  $rows.each(function(index) {
    if (index == 0) {
      const fkg = parse($, this)
      console.log(fkg)
    }
  })
})

function parse($, row) {
  let fkg = {}
  const $row = $(row)

  fkg.id = $row.children('td:first-child').text()

  fkg.star = 6

  fkg.images = []
  $row.find('td:nth-child(2) img').each(function(index) {
    fkg.images.push($(this).data('original'))
  })

  fkg.attribute = $row.children('td:nth-child(3)').text()

  fkg.name = $row.find('td:nth-child(4) a').text()

  fkg.nation = $row.find('td:nth-child(5)').text()

  fkg.hitPoint = parseStats($, $row.children('td:nth-child(7)').text())

  fkg.attack = parseStats($, $row.children('td:nth-child(8)').text())

  fkg.defense = parseStats($, $row.children('td:nth-child(9)').text())

  fkg.speed = $row.children('td:nth-child(10)').text()

  fkg.activeSkill = $row.children('td:nth-child(11)').html()
    .split('<br class="spacer">')
    .map((e) => $('<div/>').html(e).text())

  fkg.passiveSkills = parsePassiveSkills($, $row.children('td:nth-child(12)').html())

  fkg.love = $row.children('td:nth-child(13)').text()

  fkg.obtainBy = $row.children('td:nth-child(14)').text()

  return fkg
}

function parseStats($, statsString) {
  const regex = [
    /(?:^|↓)(\d+)(?:\()/g,
    /(?:\()(\d+)(?:\))/g,
    /(?:\+)(\d+)(?:↓|$)/g,
  ]
  let stats = [[], []]
  let match
  while (match = regex[1].exec(statsString)) {
    stats[0].push(match[1]);
  }
  while (match = regex[2].exec(statsString)) {
    stats[1].push(match[1]);
  }

  return stats
}

function parsePassiveSkills($, skillsString) {
  const delimiter = [
    '(<strong>&#x9032;&#x5316;&#x5F8C;+</strong>)',
    '(<strong>&#x958B;&#x82B1;&#x5F8C;</strong>)',
  ];

  const down = '&#x2193;'

  let skills = [];
  let basics, evolutions, bloomings, a;

  [basics, a] = skillsString.split(delimiter[0]);

  [evolutions, bloomings] = a.split(delimiter[1]);



  basics = splitSkills($, basics);
  evolutions = splitSkills($, evolutions);
  bloomings = splitSkills($, bloomings);

  skills.push(basics, evolutions, bloomings);

  return skills;
}

function splitSkills($, skillsString) {
  const html = skillsString
    .replace(/&#x2193;/g, '')
    .replace(/(<br class="spacer">){2}/g, '\n\n')
    .replace(/(<br class="spacer">)/g, '\n')
    .replace(/^\s*/, '')
    .replace(/\s*$/, '');
  const text = $('<div/>').html(html).text();
  const skills = text.split('\n\n');
  return skills;
}
