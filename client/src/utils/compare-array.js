const CompareArray = {
  compare(old_array, new_array) {
    if (old_array.length !== new_array.length) {
      return false
    } else {
      let matched = false

      old_array.forEach((old_element, index) => {
        if (old_element.id !== new_array[index].id) {
          matched = true
          return
        }
      })

      return matched
    }
  }
}

export default CompareArray
