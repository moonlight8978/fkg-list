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
    let sum = 0

    const isValidNumber = string => (
      string && numberRegex.test(string) && parseInt(string) > 0
    )
    const areAllNumber = strings.every(isValidNumber)

    if (areAllNumber) {
      sum = strings.reduce((accumulator, currentValue) => (
        accumulator + parseInt(currentValue)
      ), 0)
    }

    return sum
  }
}

module.exports = StringUtils
