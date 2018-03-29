const fs = require('fs');

const destination = './build/data.json'

function writeJSON(fkgs, spaces = 4) {
  const dataString = JSON.stringify(fkgs, null, spaces);
  fs.writeFileSync(destination, dataString);
}

module.exports = writeJSON;
