import axios from 'axios';

const KEY = window._env_.API_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: KEY,
  },
});
