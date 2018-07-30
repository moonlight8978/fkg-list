const _ = require('lodash')

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
      const match = regex.exec(bloomingStatsText)
      bloomingStats[index] = parseInt(match[1])
    })

    const [basic, maxLevel, bonus] = bloomingStats
    return maxLevel + bonus
  }
}

module.exports = StatParser
