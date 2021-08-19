import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import router from './router/router';
import Default from './layouts/default.vue';
import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.component('default-layout', Default);

new Vue({
    store,
    router,
    render: (h) => h(App),
    components: { App },
}).$mount('#app');
