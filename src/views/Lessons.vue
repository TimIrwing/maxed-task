<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="6">
        <Lesson v-for="lesson in lessonsPage"
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
import Lesson from '@/components/Lesson';

const LESSONS_PER_PAGE = 5;

export default {
  name: 'Lessons',
  components: { Lesson },
  data: () => ({
    page: 1,
  }),
  computed: {
    pagesCount() {
      return Math.ceil(this.lessons.length / LESSONS_PER_PAGE);
    },

    lessons() {
      return this.$store.getters.getCourseLessons(this.$route.params.id);
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
