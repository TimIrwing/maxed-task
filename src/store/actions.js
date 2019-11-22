import getJSON from '@/API/getJSON';

export default {
  async fetchCourses({ commit, state }) {
    commit({
      type: 'SET_COURSES',
      arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/courses'),
    });


    if (state.courses.length) {
      commit({
        type: 'SET_SELECTED_COURSE',
        course: state.courses[0],
      });
    }
  },

  async fetchLessons({ commit }) {
    commit({
      type: 'SET_LESSONS',
      arr: await getJSON('https://5daca7380af117001417072a.mockapi.io/api/v1/lessons'),
    });
  },
};
