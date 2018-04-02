import FKGApi from './fkg-api'

class MyListApi {
  constructor() {
    const myListString = localStorage.getItem('myList')
    this.myList = myListString ? JSON.parse(myListString) : []
  }

  add(fkg) {
    const i = this.find(fkg.id)
    if (i === -1) {
      const newList = this.cloneMyList()
      newList.push(fkg.id)
      this.store(newList)
    }
  }

  remove(fkg) {
    const i = this.find(fkg.id)
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

  all() {
    return FKGApi.where(this.myList)
  }

  find(fkgId) {
    return this.myList.findIndex((el) => el === fkgId)
  }

  cloneMyList() {
    return this.myList.slice()
  }

  export() {
    const blob = new Blob(
      this.myList,
      { type: 'application/json' }
    )
    const url = URL.createObjectURL(blob)
    const now = new Date()
    const fileName = `FKGList-MyList-${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}.json`

    return {
      blob, url, fileName
    }
  }
}

export default new MyListApi()
