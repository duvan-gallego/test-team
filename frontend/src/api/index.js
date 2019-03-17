import Axios from 'axios';

const BE_URL = {
  development: 'http://localhost:3001',
  production: 'https://www.mysuperproductionurl.com'
};

const apiInstance = (() => (
  Axios.create({
    baseURL: `${BE_URL[process.env.NODE_ENV]}/api`,
  })
))();

export default apiInstance;