import getJSON from '@/API/getJSON';

export default {
  async fetchCourses({ commit }) {
    commit({
      type: 'SET_COURSES',
      arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/courses'),
    });
  },

  async fetchLessons({ commit }) {
    commit({
      type: 'SET_LESSONS',
      arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/lessons'),
    });
  },
};
