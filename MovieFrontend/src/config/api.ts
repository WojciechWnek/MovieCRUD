import axios from 'axios';

const config = {
  // baseURL: 'http://localhost:5246',
  baseURL: 'https://localhost:7052/',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const http = axios.create(config);

const { get, post, put, patch, delete: destroy } = http;
export { get, post, put, patch, destroy };
