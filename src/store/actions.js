import getJSON from '@/API/getJSON';

export default {
  async fetchCourses({ state, commit }) {
    if (!state.courses) {
      commit({
        type: 'SET_COURSES',
        arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/courses'),
      });
    }
  },

  async fetchLessons({ state, commit }) {
    if (!state.lessons) {
      commit({
        type: 'SET_LESSONS',
        arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/lessons'),
      });
    }
  },
};
