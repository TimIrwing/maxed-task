<template>
  <v-select v-model="selected"
            class="select"
            outlined
            single-line
            :items="courses"
            label="Выберите предмет"
            hide-details
            @change="navigateCourse"/>
</template>

<script>
export default {
  name: 'CourseSelect',
  data: () => ({
    selected: null,
  }),
  computed: {
    courses() {
      return this.$store.state.courses.map((obj) => ({ value: obj.id, text: obj.name }));
    },
  },
  watch: {
    $route(to) {
      if (to.name === 'main') this.selected = null;
    },
  },
  methods: {
    navigateCourse(id) {
      this.$router.push({ name: 'course', params: { id } });
    },
  },
};
</script>

<style scoped>
  .select {
    max-width: 200px;
  }
</style>
