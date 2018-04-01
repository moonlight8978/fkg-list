const fs = require('fs')
const cheerio = require('cheerio')

const parseFKG = require('./parser/raw')
const FKGAdapter = require('./parser/adapter')

// Files need to parse
// const files = [
//   './build/★★★★★★.html',
//   './build/★★★★★.html',
//   './build/★★★★.html',
//   './build/★★★.html',
//   './build/★★.html',
// ]

const stars = [6, 5, 4, 3, 2]

// Main function, parse html file
function parseHTML() {
  let fkgs = []

  const files = fs.readdirSync('./build/lists')
  files.forEach(function(file, index) {
    const data = fs.readFileSync(file)
    const $ = cheerio.load(data)

    const $rows = $('#sortabletable1 > tbody > tr')
    $rows.each(function(rowIndex) {
      const raw = parseFKG($, this, stars[index])
      const fkg = new FKGAdapter(raw)
      if (fkg.id) {
        fkgs.push(fkg)
        console.log(`File ${index}, Row ${rowIndex}, FKG No.${fkg.id}`)
      }
    })
  })

  return fkgs
}

// Parse single item
function parseItem() {
  const files = fs.readdirSync('./build/items')

  const data = fs.readFileSync(files[0]);
  const $ = cheerio.load(data)

  const $tables = $('.style_table')
  const $rows = $($table[0]).children('tbody').children('tr')

  $rows.each(function(rowIndex) {
    
  })
}

module.exports = {
  parseHTML
}
