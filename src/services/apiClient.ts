import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.imperiumpotencialhumano.com/api', // ENVIRONMENT VARIABLE
  headers: {
    'Content-Type': 'application/json',
  },
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