<template>
  <v-card class="ma-12">
    <v-tabs v-model="tab"
centered>
      <v-tab>
        Тесты
      </v-tab>

      <v-tab>
        Статистика
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
    paths: ['tests', 'stats'],
  }),
  computed: {
    lesson() {
      return this.$store.getters.getLesson(this.$route.params.id);
    },
  },
  watch: {
    tab() {
      this.$router.push({ name: this.paths[this.tab] });
    },
  },
};
</script>

<style scoped>

</style>
