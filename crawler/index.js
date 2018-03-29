const parseHTML = require('./parser')
const writeJSON = require('./writer')

const fkgs = parseHTML();
writeJSON(fkgs, 0);
