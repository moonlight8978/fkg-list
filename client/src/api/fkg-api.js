import axios from 'axios'

const FKGApi = {
  all() {
    return axios.get('data.json')
  },
}

export default FKGApi
