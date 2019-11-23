import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';
import Main from '@/views/Main';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '/',
      component: Main,
    }],
  }],
});
