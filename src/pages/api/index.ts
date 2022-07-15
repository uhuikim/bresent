import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL,
});

export const getData = (url: string, params = {}) => api.get(url, { params });
