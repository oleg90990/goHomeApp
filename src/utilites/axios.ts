import axios from 'axios';
import Toast from './toastr'
import Auth from '../utilites/auth'

let axiosBase = axios.create({
  // baseURL: 'https://friendshome.ru/api/v1/'
   baseURL: 'http://127.0.0.1:8000/api/v1/'
});

axiosBase.interceptors.request.use(
  async config => {
    config.headers.Authorization = `Bearer ${await Auth.getToken()}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosBase.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    const { data, status } = error.response;

    if (status === 401) {
      return Promise.reject(error);
    }

    if (data.errors) {
      const messages: string = Object
        .keys(data.errors)
        .map(key => data.errors[key])
        .join('\n');
      Toast.error(messages);
    } else if (data.message) {
      Toast.error(data.message);
    }

   return Promise.reject(error);
  },
);

export default axiosBase;
