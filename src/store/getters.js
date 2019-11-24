export default {
  getCourseLessons: (state) => (id) => state.lessons.filter((lesson) => lesson.courseId === id),
  getLesson: (state) => (id) => state.lessons.find((lesson) => lesson.id === id),
};
