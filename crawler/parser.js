const fs = require('fs')
const cheerio = require('cheerio')

const { parseFKG, parseFKGShow } = require('./parser/raw')
const FKGAdapter = require('./parser/adapter')

// Files need to parse
// const files = [
//   './build/★★★★★★.html',
//   './build/★★★★★.html',
//   './build/★★★★.html',
//   './build/★★★.html',
//   './build/★★.html',
// ]

const stars = [2, 3, 4, 5, 6]

function parseHTML() {
  let fkgs = []

  const dirList = 'build/lists'
  let files = fs.readdirSync(dirList)
  files.forEach(function(file, index) {
    const list = parseList(`${dirList}/${file}`, index)
    fkgs = fkgs.concat(list)
  })

  const dirItem = 'build/items'
  files = fs.readdirSync(dirItem)
  files.forEach(function(file, index) {
    const fkg = parseItem(`${dirItem}/${file}`, index)
    fixMissingImages(fkg, fkgs)
    console.log(fkg);
    fkgs.push(fkg)
  })

  return fkgs
}

// Main function, parse html file
function parseList(path, listIndex) {
  let fkgs = []

  const data = fs.readFileSync(path)
  const $ = cheerio.load(data)

  const $rows = $('#sortabletable1 > tbody > tr')
  $rows.each(function(rowIndex) {
    const raw = parseFKG($, this, stars[listIndex])
    const fkg = new FKGAdapter(raw)
    if (fkg.id) {
      fkgs.push(fkg)
      console.log(`File ${listIndex}, Row ${rowIndex}, FKG No.${fkg.id}`)
    }
  })

  return fkgs
}

// Parse single item
function parseItem(path, index) {
  const data = fs.readFileSync(path)
  const $ = cheerio.load(data)

  const raw = parseFKGShow($)
  const fkg = new FKGAdapter(raw)

  console.log(`Item ${index}`)

  return fkg
}

// fix missing images from 昇華-FKG
function fixMissingImages(fkg, fkgs) {
  const lowStar = fkgs.find(e => e.id === fkg.id / 1000)
  fkg.images = lowStar.images
}

module.exports = parseHTML
