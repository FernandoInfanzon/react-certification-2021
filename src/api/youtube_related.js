import axios from 'axios';

// const KEY = "AIzaSyDy8oDa1ARQooINFzwU0AcKHA3cB0_qZzU";

const KEY = 'AIzaSyCUw08Z7JdqIZK9xRK00q78Kc2ryyOvV_M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    regionCode: 'MX',
    maxResults: 20,
    key: KEY,
  },
  headers: {},
});
