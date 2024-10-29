import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: 'http://localhost:19200/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const newConfig = config;

    const token = Cookies.get('token');

    if (token) {
      newConfig.headers.Authorization = `Token ${token}`;
    }

    if (newConfig.data) {
      newConfig.data = JSON.stringify(config.data);
    }

    return newConfig;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log('HTTP-REQUEST-ERROR:', error);
    return Promise.reject(error);
  },
);

export default http;
