const $ = require('cheerio')

const HTMLUtils = {
  getText(html) {
    return $('<div/>').html(html).text().trim()
  }
}

module.exports = HTMLUtils
