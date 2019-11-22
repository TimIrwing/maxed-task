<template>
  <v-app>
    <v-app-bar app
               height="80">
      <v-container>
        <v-row
            max-height="100%"
justify="space-between"
               align="center">
          <v-col cols="6">
            <v-img src="./assets/header-logo.svg"
                   height="70"
                   position="left center"
                   contain
                   alt="Максимум - Подготовка к экзаменам"/>
          </v-col>

          <v-col cols="6"
                 sm="4"
                 md="3"
                 lg="3"
                 xl="3">
            <CourseSelect/>
          </v-col>
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
