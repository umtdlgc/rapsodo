import axios from 'axios';
import notify from '../../utils/notify.js';

function errorResponseHandler(error) {
    notify.showError(error.response.data.error);
    return Promise.reject(error);
}
const instance = axios.create({
    baseURL: process.env.VUE_APP_DATA_GET,
});
instance.interceptors.response.use((response) => response, errorResponseHandler);

export default instance;
