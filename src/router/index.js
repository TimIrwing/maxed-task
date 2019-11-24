import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App';
import Main from '@/views/Main';
import Lessons from '@/views/Lessons';
import Lesson from '@/views/Lesson';
import Tests from '@/views/Tests';
import Stats from '@/views/Stats';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    name: 'app',
    path: '/',
    redirect: { name: 'main' },
    component: App,
    children: [{
      name: 'main',
      path: './main',
      component: Main,
    },
    {
      name: 'lesson',
      path: './lesson/:id',
      redirect: { name: 'tests' },
      component: Lesson,
      children: [
        {
          name: 'tests',
          path: './tests',
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
      name: 'course',
      path: './course/:id',
      component: Lessons,
    }],
  }],
});
