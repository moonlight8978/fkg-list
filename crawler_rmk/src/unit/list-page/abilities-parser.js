const $ = require('cheerio')
const _ = require('lodash')

const HTMLUtils = require('../../utils/html-utils')
const Logger = require('../../utils/logger')

const { brRegex } = require('../constants')

// ↓
const downSymbol = /&#x2193;/g
// (進化後+)
const secondStageDelim = /\(?(<strong>)?\(?(&#x9032;&#x5316;&#x5F8C;\+)\)?(<\/strong>)?\)?/
// (開花後)
const thirdStageDelim = /\(?(<strong>)?\(?(&#x958B;&#x82B1;&#x5F8C;)\)?(<\/strong>)?\)?/
const noAbilitiesRegex = /^なし/

const AbilitiesParser = {
  parse(abilitiesHTML) {
    const stages = this.splitIntoStages(abilitiesHTML)
    const abilities = stages.map(stageHTML => stageHTML && this.decodeAbilities(stageHTML))
    return _.compact(abilities)
  },

  splitIntoStages(abilitiesHTML) {
    let firstStage, secondStage, thirdStage, rest, matches

    matches = abilitiesHTML.match(secondStageDelim)
    if (matches) {
      [firstStage, rest] = abilitiesHTML.split(matches[0])
    } else {
      firstStage = abilitiesHTML
    }

    matches = abilitiesHTML.match(thirdStageDelim)
    if (matches) {
      [secondStage, thirdStage] = rest.split(matches[0])
    } else {
      secondStage = rest
    }

    return [firstStage, secondStage, thirdStage]
  },

  decodeAbilities(html) {
    const withoutSpecialSymbols = html.replace(downSymbol, '')
    const withNewLine = withoutSpecialSymbols.replace(brRegex, '\n')
    const abilitiesText = HTMLUtils.getText(withNewLine)

    if (noAbilitiesRegex.test(abilitiesText)) {
      return undefined
    }
    return abilitiesText
  }
}

module.exports = AbilitiesParser
