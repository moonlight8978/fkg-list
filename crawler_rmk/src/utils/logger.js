const fs = require('fs')

const Logger = {
  debug(text) {
    const currentTimestamp = Date.now()
    const fileName = `log-${currentTimestamp}.txt`
    fs.writeFileSync(`tmp/${fileName}`, text)
  }
}

module.exports = Logger
