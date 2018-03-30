import axios from 'axios';

const FKGApi = {
  all: function all() {
    return axios.get('data.json');
  },
};

export default FKGApi;
