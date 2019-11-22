<template>
  <v-select outlined
            :items="courses"
            label="Выберите предмет"
            hide-details/>
</template>

<script>
export default {
  name: 'CourseSelect',
  computed: {
    courses() {
      if (!this.$store.state.courses) return [];

      return this.$store.state.courses.map((obj) => ({ value: obj.id, text: obj.name }));
    },
  },
};
</script>

<style scoped>

</style>
