import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/api/',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});

export default http;
