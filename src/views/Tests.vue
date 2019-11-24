<template>
  <div class="py-12">
    <PlaceholderPage :img="{ alt: 'школьные тесты', src: require('@/assets/tests.svg') }"
                     text="Тесты"/>
  </div>
</template>

<script>
import PlaceholderPage from '@/components/PlaceholderPage';

export default {
  name: 'Tests',
  components: { PlaceholderPage },
};
</script>

<style scoped>

</style>
