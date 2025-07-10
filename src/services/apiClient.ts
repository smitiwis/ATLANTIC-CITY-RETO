import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: false, 
});

apiClient.interceptors.response.use(
  res => res,
  err => {
    console.error('❌ Error API:', err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default apiClient;