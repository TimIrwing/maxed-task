<template>
  <v-app>
    <v-app-bar app
               height="80">
      <AppContainer>
        <img src="./assets/header-logo.svg"
             height="100%"
             alt="Максимум - Подготовка к экзаменам">

        <div>todo выбор курса
          <router-link to="/asdasd">asdasd</router-link>
          <router-link to="/user">user</router-link>
        </div>
      </AppContainer>
    </v-app-bar>

    <v-content>
      <v-container fluid/>
    </v-content>
  </v-app>
</template>

<script>

import AppContainer from '@/components/AppContainer';

export default {
  name: 'app',
  components: { AppContainer },
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
