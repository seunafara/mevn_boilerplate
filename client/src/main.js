import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

// Setting up default vue's http module for api calls
Vue.prototype.$http = axios;
const token = localStorage.getItem('token');

// if token exists, we will default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
