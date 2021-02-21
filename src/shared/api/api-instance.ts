import Axios from 'axios';

export const apiInstance = Axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});
