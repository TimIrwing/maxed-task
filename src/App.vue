<template>
  <v-app>
    <v-app-bar app>
      <v-container>
        <v-row justify="space-between"
               align="center">
          <img src="./assets/header-logo.svg"
               alt="Максимум - Подготовка к экзаменам">

          <CourseSelect/>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content>
      <v-container fluid/>
    </v-content>
  </v-app>
</template>

<script>
import CourseSelect from '@/components/CourseSelect';

export default {
  name: 'app',
  components: { CourseSelect },
  mounted() {
    this.$store.dispatch('fetchCourses');
    this.$store.dispatch('fetchLessons');
  },
};
</script>

<style>
#app {
  font-family: 'PT Sans Narrow', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
