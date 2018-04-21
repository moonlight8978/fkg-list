import FKGApi from './fkg-api'

class MyListApi {
  get myList() {
    const myListString = localStorage.getItem('myList')
    return myListString ? JSON.parse(myListString) : []
  }

  set myList(list) {
    this.myList = list
  }
  // Add a fkg to myList
  add(fkg) {
    const i = this.find(fkg.id)
    if (i === -1) {
      const newList = this.cloneMyList()
      newList.push(fkg.id)
      this.store(newList)
    }
  }

  // Remove a fkg from myList
  remove(fkg) {
    const i = this.find(fkg.id)
    if (i >= 0) {
      const newList = this.cloneMyList()
      newList.splice(i, 1)
      this.store(newList)
    }
  }

  // Save new list to localStorage
  store(newList) {
    this.myList = newList
    const myListString = JSON.stringify(this.myList)
    localStorage.setItem('myList', myListString)
  }

  // Use FKGApi to fetch myList fkgs' data
  all() {
    return FKGApi.where(this.myList)
  }

  // Find fkg in myList
  find(fkgId) {
    return this.myList.findIndex((el) => el === fkgId)
  }

  cloneMyList() {
    return this.myList.slice()
  }

  // Export myList into file, return url, fileName
  export() {
    const blob = new Blob(
      [JSON.stringify(this.myList)],
      { type: 'application/json' }
    )
    const url = URL.createObjectURL(blob)
    const now = new Date()
    const fileName = `FKGList-MyList-${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}.json`

    return {
      blob, url, fileName
    }
  }

  // Import myList from input file
  async import(file) {
    const fkgIds = await this.read(file)
    localStorage.setItem('myList', fkgIds)
  }

  read(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function(event) {
        this.myList = event.target.result
        resolve(event.target.result)
      }
      reader.onerror = function(event) {
        reject(0)
      }
      reader.readAsText(file, 'UTF-8')
    })
  }
}

export default new MyListApi()
