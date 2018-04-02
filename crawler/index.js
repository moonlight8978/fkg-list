const parseHTML = require('./parser')
const writeJSON = require('./writer')

const fkgs = parseHTML();
console.log("Parse completed");

writeJSON(fkgs, 0);
console.log("Write JSON completed");
