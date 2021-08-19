import axios from 'axios';
// import { store } from '../store/store';

// function errorResponseHandler(error) {
//     store.dispatch('changeSnackbarStatu', error.response.data);
//     return Promise.reject(error);
// }
const instance = axios.create({
    baseURL: process.env.VUE_APP_DATA_GET,
});
instance.interceptors.response.use((response) => response);
// instance.interceptors.response.use((response) => response, errorResponseHandler);

export default instance;
