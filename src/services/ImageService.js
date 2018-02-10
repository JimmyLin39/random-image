import axios from 'axios';

export default {
  retrieveImages() {
    return axios.get('https://picsum.photos/300/?random');
  },
}
