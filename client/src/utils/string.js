const StringUtils = {
  find(string, substring) {
    const regex = new RegExp(substring)
    const match = string.match(regex)
    return match !== null
  }
}

export default StringUtils
