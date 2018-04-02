import axios from 'axios'

const FKGApi = {
  all() {
    return axios.get('data.json')
  },
  where(ids) {
    return axios.get('data.json')
      .then((response) => {
        let filtered
        if (ids.length > 0) {
          filtered = response.data.filter(fkg => ids.indexOf(fkg.id) > -1)
        } else {
          filtered = []
        }
        return Promise.resolve(filtered)
      })
  }
}

export default FKGApi
