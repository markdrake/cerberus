import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueCurrencyFilter from 'vue-currency-filter';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.config.productionTip = false;
Vue.use(VueCurrencyFilter);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
