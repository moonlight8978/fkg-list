const $ = require('cheerio')

const nameAndVersionRegex = /^([^\(^\)]+)((?:\()([^\(^\)]+)(?:\))|$)/

const NameVersionParser = {
  parse(text) {
    const matches = text.match(nameAndVersionRegex)
    return { name: matches[1], version: matches[3] || 'ノーマル' }
  }
}

module.exports = NameVersionParser
