import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    regionCode: 'MX',
    maxResults: 40,
    key: KEY,
  },
  headers: {},
});
