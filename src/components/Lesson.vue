<template>
  <div>{{lesson}}</div>
</template>

<script>
export default {
  name: 'Lesson',
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
