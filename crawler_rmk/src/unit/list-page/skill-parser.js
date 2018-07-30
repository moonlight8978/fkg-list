const $ = require('cheerio')

const HTMLUtils = require('../../utils/html-utils')

const brHTML = '<br class="spacer">'

const SkillParser = {
  parse(skillHTML) {
    const [name, triggerRate, description] = skillHTML
      .split(brHTML)
      .map(html => HTMLUtils.getText(html))

    return { name, triggerRate, description }
  }
}

module.exports = SkillParser
