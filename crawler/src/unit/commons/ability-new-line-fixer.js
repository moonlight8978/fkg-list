const noteRegex = /※/g

const AbilityNewLineFixer = {
  perform(ability) {
    return ability
      .replace(/\s*/g, '')
      .replace(noteRegex, "\n※")
  }
}

module.exports = AbilityNewLineFixer
