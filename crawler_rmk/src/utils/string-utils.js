const numberRegex = /^\d+$/

const StringUtils = {
  split(string, delimRegex) {
    let beginning, rest, matches

    matches = string.match(delimRegex)
    if (matches) {
      return string.split(matches[0])
    } else {
      return [string, undefined]
    }
  },

  sum(strings) {
    const isValidNumber = string => string && numberRegex.test(string)
    const areAllNumber = strings.every(isValidNumber)

    if (areAllNumber) {
      const sum = strings.reduce((accumulator, currentValue) => (
        accumulator + parseInt(currentValue)
      ), 0)
      return sum
    }

    return null
  }
}

module.exports = StringUtils
