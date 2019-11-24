<template>
  <div class="mb-2">
    <router-link :to="`/lesson/${lesson.id}/`"
                 class="text-decoration-none">
      <v-card class="d-sm-flex">
        <v-card-title class="d-block headline text-center">
          {{lesson.title}}
        </v-card-title>

        <v-spacer/>

        <v-card-subtitle class="d-bloc text-center title mt-n6 mt-sm-0">
          {{date}}
        </v-card-subtitle>
      </v-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LessonCard',
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      const date = new Date(Number(this.lesson.startedAt));

      return date.toLocaleDateString('ru-RU', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
  .text-decoration-none {
    text-decoration: none;
  }
</style>
