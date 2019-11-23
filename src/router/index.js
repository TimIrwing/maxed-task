import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/App'),
    children: [{
      path: '/',
      component: () => import('@/views/Main'),
    },
    {
      path: '/:id',
      component: () => import('@/views/Lessons'),
    }],
  }],
});
