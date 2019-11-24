export default {
  getCourseLessons: (state) => (id) => state.lessons.filter((lesson) => lesson.courseId === id),
};
