import Vue from 'vue';
import Router from 'vue-router';

import auth from './auth';



Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: auth,
});
