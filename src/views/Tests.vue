<template>
  <PlaceholderPage :img="{ alt: 'школьные тесты', src: require('@/assets/tests.svg') }"
                   text="Тестов пока нет"/>
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
