<template>
  <v-app>
    <v-app-bar app
               height="80">
      <v-container>
        <v-row class="flex-nowrap"
               justify="space-between"
               align="center">
          <router-link :to="{ name:'main' }">
            <img src="./assets/header-logo.svg"
                 alt="Максимум - Подготовка к экзаменам">
          </router-link>

          <CourseSelect/>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import CourseSelect from '@/components/CourseSelect';

export default {
  name: 'app',
  components: { CourseSelect },
  asyncData({ store }) {
    return store.dispatch('fetchCourses');
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
