import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import router from './router/router';
import Default from './layouts/default.vue';
import Authenticated from './layouts/authenticated.vue';
import Notifications from 'vue-notification';

import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.component('default-layout', Default);
Vue.component('authenticated-layout', Authenticated);
Vue.use(Notifications);

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('token') == null) {
			next({
				path: '/',
				params: { nextUrl: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

new Vue({
	store,
	router,
	render: (h) => h(App),
	components: { App },
}).$mount('#app');
