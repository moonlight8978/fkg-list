class SortOneLevelDeep {
  sort(girls, field) {
    return girls.sort((first, second) => {
      if (parseInt(first[field], 10) < parseInt(second[field], 10)) {
        return -1;
      }
      if (parseInt(first[field], 10) > parseInt(second[field], 10)) {
        return 1;
      }
      return 0;
    });
  }
}

export default SortOneLevelDeep;
