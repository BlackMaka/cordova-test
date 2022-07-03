import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueCordova from 'vue-cordova';
import CORDOVA_API from '@/utils/cordova.js';
Vue.use(VueCordova);
Vue.prototype.$CORDOVA_API = CORDOVA_API;
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
