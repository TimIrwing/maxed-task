import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';
import createAsyncDataGuard from '@/API/createAsyncDataGuard';

Vue.config.productionTip = false;

router.beforeResolve(createAsyncDataGuard({ store, router }));

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h('router-view'),
}).$mount('#app');
