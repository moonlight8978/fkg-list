import axios from 'axios'
import _ from 'lodash'

import sort from '../utils/sort'
import filter from '../utils/filter'

const dataPath = 'data.json'

const FKGApi = {
  async all(conditions = null) {
    const { data } = await axios.get(dataPath)

    if (conditions) {
      let filtered = filter(data, conditions)
      const fkgs = sort(filtered, conditions)
      return Promise.resolve(fkgs)
    } else {
      return Promise.resolve(data)
    }
  },
  async where(ids) {
    const response = await axios.get(dataPath)
    const filtered = ids.length > 0 ? response.data.filter(fkg => ids.indexOf(fkg.id) > -1) : []
    return Promise.resolve(filtered)
  },
  async getNames() {
    const response = await axios.get(dataPath)
    const names = response.data.map(fkg => fkg.name)
    const uniqueNames = _.uniq(names)
    return Promise.resolve(uniqueNames)
  }
}

export default FKGApi
