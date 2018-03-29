const fs = require('fs');
const cheerio = require('cheerio');

const parseFKG = require('./parser/raw');
const FKGAdapter = require('./parser/adapter');

// Files need to parse
const files = [
  './build/★★★★★★.html',
  './build/★★★★★.html',
  './build/★★★★.html',
  './build/★★★.html',
  './build/★★.html',
];

const stars = [6, 5, 4, 3, 2];

// Main function, parse html file
function parseHTML() {
  let fkgs = [];

  files.forEach(function(file, index) {
    const data = fs.readFileSync(file);
    const $ = cheerio.load(data);

    const $rows = $('#sortabletable1 > tbody > tr');
    $rows.each(function(rowIndex) {
      const raw = parseFKG($, this, stars[index]);
      const fkg = new FKGAdapter(raw);
      if (fkg.id) {
        fkgs.push(fkg);
        console.log(`File ${index}, Row ${rowIndex}, FKG No.${fkg.id}`);
      }
    })
  })

  return fkgs;
}

module.exports = parseHTML;
