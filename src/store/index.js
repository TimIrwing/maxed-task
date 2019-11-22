import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCourse: null,
    courses: null,
    lessons: null,
  },
  mutations,
  actions,
});
