import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response.status;

    if (status === 404 || status === 500) {
      console.error(error);
      // window.location.href = '/';
    }
  },
);

export default api;
