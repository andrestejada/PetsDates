import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' },
});
