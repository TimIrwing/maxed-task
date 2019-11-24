<template>
  <v-container>
    <v-row v-if="img"
           justify="center">
      <img :src="img.src"
           :alt="img.alt">
    </v-row>

    <h1 v-if="text"
        class="display-1 text-center">
      {{text}}
    </h1>
  </v-container>
</template>

<script>
export default {
  name: 'PlaceholderPage',
  props: {
    img: {
      type: Object,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
</style>
