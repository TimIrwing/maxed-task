/* eslint-disable no-param-reassign */

export default {
  SET_COURSES(state, { arr }) {
    state.courses = arr;
  },

  SET_LESSONS(state, { arr }) {
    state.lessons = arr;
  },

  SET_SELECTED_COURSE(state, { course }) {
    state.selectedCourse = course;
  },
};
