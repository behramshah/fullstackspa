const axios = require('axios').default;

const axiosInstance = axios.create({
    baseURL: 'localhost:8080',
    timeout: 2000,
});

export default axiosInstance;