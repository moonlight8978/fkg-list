const fs = require('fs');

const destination = './build/data.json'

function writeJSON(fkgs) {
  const dataString = JSON.stringify(fkgs, null, 4);
  fs.writeFileSync(destination, dataString);
}

module.exports = writeJSON;
