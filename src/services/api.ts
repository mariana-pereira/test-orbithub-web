import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use(async (config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
