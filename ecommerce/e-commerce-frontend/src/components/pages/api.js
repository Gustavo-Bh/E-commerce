import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
