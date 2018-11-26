import axios from 'axios';

const BASE_URL = 'http://45.40.254.149:9100';

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