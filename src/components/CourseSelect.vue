<template>
  <v-select class="select"
            outlined
            :items="courses"
            label="Выберите предмет"
            hide-details
            @change="navigateCourse"/>
</template>

<script>
export default {
  name: 'CourseSelect',
  computed: {
    courses() {
      return this.$store.state.courses.map((obj) => ({ value: obj.id, text: obj.name }));
    },
  },
  methods: {
    navigateCourse(id) {
      this.$router.push(`/${id}`);
    },
  },
};
</script>

<style scoped>
  .select {
    max-width: 200px;
  }
</style>
