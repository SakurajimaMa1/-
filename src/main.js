import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
// import env from './env'

const mock = false;
if (mock) {
  require('./mock/api');
}

// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://localhost:8081/api';
axios.defaults.timeout = 8000;

// axios.defaults.baseURL = env.baseURL;

axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
  }else {
    alert(res.msg);
    return Promise.reject(res);
  }
  // return res.data
});

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
