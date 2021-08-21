import apiGateway from './interceptors/api.js'
export default {
  signIn(req) {
    return apiGateway.post('/login', req);
  },
}