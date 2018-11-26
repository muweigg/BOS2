import axios from 'axios'
import store from '../store'
import {LOGGED_OUT} from '../store/mutation-types'

export const BASE_URL = 'http://45.40.254.149:9100';

axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
  if (response.status === 401) {
    store.commit(LOGGED_OUT);
    window.location.replace('/#/login');
  }
  return response;
}, error => Promise.reject(error));

const api = {
  async login (params = {}) {
    const formData = this.toFormData(params);
    return await axios.post(`${BASE_URL}/system/login`, formData);
  },
  toFormData (params) {
    const formData = new FormData();
    for (let key in params) {
      formData.set(key, params[key]);
    }
    return formData;
  }
};

export default api;
