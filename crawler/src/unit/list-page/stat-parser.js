const _ = require('lodash')

const StringUtils = require('../../utils/string-utils')

const statDelim = /↓/

const statRegex = [
  /^(\d+)(?:\()/,
  /(?:\()(\d+)(?:\))/,
  /(?:\+)(\d+)$/,
]

const StatParser = {
  parse(text) {
    let bloomingStats = []
    const bloomingStatsText = text.split(statDelim).last()

    statRegex.forEach((regex, index) => {
      const matches = regex.exec(bloomingStatsText)
      bloomingStats[index] = matches ? matches[1] : null
    })

    const [basic, maxLevel, bonus] = bloomingStats
    return StringUtils.sum([maxLevel, bonus])
  }
}

module.exports = StatParser
