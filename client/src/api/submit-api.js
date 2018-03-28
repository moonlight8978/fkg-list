import axios from 'axios'

const host = 'http://localhost:9292/'

const SubmitAPI = {
  submit: data => axios.post(host, data),
}

export default SubmitAPI
