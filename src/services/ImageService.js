import axios from 'axios';

export default {
  retrieveInventories() {
    return axios.get('https://picsum.photos/300/?random');
  },
}
