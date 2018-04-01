class MyListApi {
  constructor() {
    const myListString = localStorage.getItem('myList')
    this.myList = myListString ? JSON.parse(myListString) : []
  }

  add(fkg) {
    const i = this.find(fkg)
    if (i === -1) {
      const newList = this.cloneMyList()
      newList.push(fkg)
      this.store(newList)
    }
  }

  remove(fkg) {
    const i = this.find(fkg)
    if (i >= 0) {
      const newList = this.cloneMyList()
      newList.splice(i, 1)
      this.store(newList)
    }
  }

  store(newList) {
    this.myList = newList
    const myListString = JSON.stringify(this.myList)
    localStorage.setItem('myList', myListString)
  }

  find(fkg) {
    return this.myList.findIndex((el) => el.id === fkg.id)
  }

  cloneMyList() {
    return this.myList.slice()
  }
}

export default new MyListApi()