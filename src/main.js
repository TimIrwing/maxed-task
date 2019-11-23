import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h('router-view'),
}).$mount('#app');
