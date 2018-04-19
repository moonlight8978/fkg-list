import axios from 'axios'

const dataPath = 'data.json'

const FKGApi = {
  async all() {
    const response = await axios.get(dataPath)
    return Promise.resolve(response.data)
  },
  async where(ids) {
    const response = await axios.get(dataPath)
    const filtered = ids.length > 0 ? response.data.filter(fkg => ids.indexOf(fkg.id) > -1) : []
    return Promise.resolve(filtered)
  },
  async getNames() {
    const response = await axios.get(dataPath)
    return Promise.resolve(response.data.map(fkg => fkg.name))
  }
}

export default FKGApi
