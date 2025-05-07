import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update as per your backend
  withCredentials: true, // if using cookies or sessions
});

// Optional: add auth token interceptor
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
