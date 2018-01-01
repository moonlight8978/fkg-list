class SortTwoLevelDeep {
  sort(girls, field) {
    const fields = field.split('.');
    return girls.sort((first, second) => {
      if (first[fields[0]][fields[1]] < second[fields[0]][fields[1]]) {
        return -1;
      }
      if (first[fields[0]][fields[1]] > second[fields[0]][fields[1]]) {
        return 1;
      }
      return 0;
    });
  }
}

export default SortTwoLevelDeep;
