<template>
  <v-card class="ma-12">
    <v-tabs v-model="tab"
            centered>
      <v-tab v-for="tab in tabs"
             :key="tab.path">
        {{tab.name}}
      </v-tab>
    </v-tabs>

    <router-view/>
  </v-card>
</template>

<script>
export default {
  name: 'Lesson',
  data: () => ({
    tab: 0,
    tabs: [
      {
        name: 'Тесты',
        path: 'tests',
      },
      {
        name: 'Статистика',
        path: 'stats',
      },
    ],
  }),
  watch: {
    tab() {
      this.$router.push({ name: this.tabs[this.tab].path });
    },
  },
};
</script>

<style scoped>

</style>
