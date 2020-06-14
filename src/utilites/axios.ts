import axios from 'axios';
import Toast from './toastr'

let axiosBase = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

axiosBase.interceptors.request.use(
  config => {
    // console.log(config)
    // config.headers['Accept'] = 'application/json';
    // config.headers.Authorization = `Bearer ${Vue.cookie.get('Bearer')}`;
    return config;
  },
  error => {
    console.log(122112)
    return error;
  },
);

axiosBase.interceptors.response.use(
  config => {
    // console.log(config)
    // config.headers['Accept'] = 'application/json';
    // config.headers.Authorization = `Bearer ${Vue.cookie.get('Bearer')}`;
    return config;
  },
  (error) => {
    const { response } = error;
    const { data } = response;

    if (data.errors) {
      Object.keys(data.errors).map(error => {
        Toast.error(data.errors[error]);
      });
    }

    return error;
  },
);

export default axiosBase;
