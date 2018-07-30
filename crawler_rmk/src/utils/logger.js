const fs = require('fs')

const Logger = {
  debug(text) {
    const now = Date.now()
    const fileName = `log-${now}.txt`
    fs.writeFileSync(`tmp/${fileName}`, text)
  }
}

module.exports = Logger
