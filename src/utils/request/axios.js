import axios from 'axios';

// 初始化axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})


service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
)

export default service