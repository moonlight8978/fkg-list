import FKGApi from './fkg-api'
import FileUtils from '../utils/file-utils'

import sort from '../utils/sort'
import filter from '../utils/filter'

const MyListApi = {
  // ids getter, takes data from localStorage if exist, else returns empty array
  get myList() {
    const myListString = localStorage.getItem('myList')
    return myListString ? JSON.parse(myListString) : []
  },

  // Set new ids
  set myList(myNewList) {
    this._myList = myNewList
  },

  // Add a fkg to myList
  add(fkg) {
    const i = this.find(fkg.id)
    if (i === -1) {
      const newList = this.cloneMyList()
      newList.push(fkg.id)
      this.store(newList)
    }
  },

  // Remove a fkg from myList
  remove(fkg) {
    const i = this.find(fkg.id)
    if (i >= 0) {
      const newList = this.cloneMyList()
      newList.splice(i, 1)
      this.store(newList)
    }
  },

  // Save new list to localStorage
  store(newList) {
    this._myList = newList
    const myListString = JSON.stringify(this._myList)
    localStorage.setItem('myList', myListString)
  },

  // Use FKGApi to fetch myList fkgs' data
  async all(conditions = null) {
    const data = await FKGApi.where(this.myList)

    if (conditions) {
      let filtered = filter(data, conditions)
      const fkgs = sort(filtered, conditions)
      return Promise.resolve(fkgs)
    } else {
      return Promise.resolve(data)
    }
  },

  // Find fkg in myList
  find(fkgId) {
    return this.myList.findIndex((el) => el === fkgId)
  },

  cloneMyList() {
    return this.myList.slice()
  },

  // Export myList into file, return url, fileName
  export() {
    const { url } = FileUtils.createBlob(JSON.stringify(this.myList), 'application/json')
    const now = new Date()
    const fileName = `FKGList-MyList-${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}.json`

    return {
      url, fileName
    }
  },

  // Import myList from input file
  async import(file) {
    const fkgIds = await FileUtils.read(file)
    localStorage.setItem('myList', fkgIds)
  }
}

export default MyListApi
