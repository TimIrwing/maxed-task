import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const User = {
  template: '<div>User</div>',
};

const ASDasd = {
  template: '<div>ASDasd</div>',
};

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/asdasd', component: ASDasd },
    { path: '/user', component: User },
  ],
});
