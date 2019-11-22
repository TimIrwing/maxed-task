import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
