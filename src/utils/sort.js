class Sort {
  constructor(sorter) {
    this.sorter = sorter;
  }

  sort(girls, field) {
    return this.sorter.sort(girls, field);
  }
}

export default Sort;
