const $ = require('cheerio')

const HTMLUtils = require('../../utils/html-utils')
const StringUtils = require('../../utils/string-utils')
const Logger = require('../../utils/logger')

const brRegex = /<br class="spacer">/g
const noteRegex = /※/g
const multipleNewLinesRegex = /\s{3,}/g
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
    const stageAbilitiesTexts = stages
      .map(stageAbilitiesHTML => (
        stageAbilitiesHTML && this.decodeStageAbilities(stageAbilitiesHTML)
      ))
      .filter(stageAbilitiesText => stageAbilitiesText !== undefined)

    return stageAbilitiesTexts
      .map(stageAbilitiesText => this.splitStageAbilities(stageAbilitiesText))
      .last()
  },

  splitIntoStages(abilitiesHTML) {
    let firstStage, secondStage, thirdStage, rest

    [firstStage, rest] = StringUtils.split(abilitiesHTML, secondStageDelim)
    if (rest) {
      [secondStage, thirdStage] = StringUtils.split(rest, thirdStageDelim)
    }

    if (secondStage) {
      secondStage = `${firstStage}\n${secondStage}`
    }

    return [firstStage, secondStage, thirdStage]
  },

  decodeStageAbilities(html) {
    const withoutSpecialSymbols = html.replace(downSymbol, '')
    const withNewLine = withoutSpecialSymbols
      .replace(brRegex, '\n')
      .replace(multipleNewLinesRegex, '\n\n')
    const abilitiesText = HTMLUtils.getText(withNewLine)

    if (noAbilitiesRegex.test(abilitiesText)) {
      return undefined
    }
    return abilitiesText
  },

  splitStageAbilities(abilitiesText) {
    const abilities = abilitiesText.split('\n\n')
    return abilities
      .map(ability => ability
        .replace(/\s*/g, '')
        .replace(noteRegex, "\n※")
      )
      .filter(ability => !noAbilitiesRegex.test(ability))
  }
}

module.exports = AbilitiesParser
