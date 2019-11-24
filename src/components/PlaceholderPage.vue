<template>
  <v-container class="py-12">
    <v-row v-if="img"
           justify="center">
      <img :src="src"
           :alt="img.alt">
    </v-row>

    <h1 v-if="text"
        class="display-1 text-center mt-4">
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
  computed: {
    src() {
      return `/${this.img.src}`;
    },
  },
};
</script>

<style scoped>

</style>
