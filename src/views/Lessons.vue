<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="10"
             sm="8"
             md="6"
             lg="5"
             xl="4">
        <LessonCard v-for="lesson in lessonsPage"
                    :key="lesson.id"
                    :lesson="lesson"/>
      </v-col>
    </v-row>

    <v-pagination v-model="page"
                  :length="pagesCount"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"/>
  </v-container>
</template>

<script>
import LessonCard from '@/components/LessonCard';

const LESSONS_PER_PAGE = 5;

export default {
  name: 'Lessons',
  components: { LessonCard },
  data: () => ({
    page: 1,
  }),
  computed: {
    pagesCount() {
      return Math.ceil(this.lessons.length / LESSONS_PER_PAGE);
    },

    lessons() {
      const arr = this.$store.getters.getCourseLessons(this.$route.params.id);
      return arr.sort((a, b) => a.startedAt - b.startedAt);
    },

    lessonsPage() {
      return this.lessons.slice((this.page - 1) * LESSONS_PER_PAGE, this.page * LESSONS_PER_PAGE);
    },
  },
  watch: {
    $route(to, from) {
      if (to !== from) this.page = 1;
    },
  },
};
</script>

<style scoped>

</style>
