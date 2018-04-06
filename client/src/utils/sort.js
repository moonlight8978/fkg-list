function sort(fkgs, { sortBy, reverseSort }) {
  let sorted = fkgs.sort((a, b) => {
    if (deepValue(a, sortBy) > deepValue(b, sortBy)) {
      return -1
    }

    if (deepValue(a, sortBy) < deepValue(b, sortBy)) {
      return 1
    }

    return 0
  })

  return reverseSort ? sorted.reverse() : sorted
}

function deepValue(obj, keysString) {
  const keys = keysString.split('.')
  let value = obj
  keys.forEach(key => {
    value = value[key]
  })

  return value
}

export default sort
