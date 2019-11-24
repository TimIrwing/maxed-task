import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App';
import Tests from '@/views/Tests';
import Stats from '@/views/Stats';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '/',
      component: () => import('@/views/Main'),
    },
    {
      path: '/lesson/:id',
      component: () => import('@/views/Lesson'),
      children: [
        {
          name: 'tests',
          path: './tests',
          alias: '/',
          component: Tests,
        },
        {
          name: 'stats',
          path: './stats',
          component: Stats,
        },
      ],
    },
    {
      path: '/:id',
      component: () => import('@/views/Lessons'),
    }],
  }],
});
