<template>
  <PlaceholderPage :img="{ alt:'метеорит', src: require('@/assets/comet.svg') }"
                   text="Главной страницы нет, как и динозавров"/>
</template>

<script>
import PlaceholderPage from '@/components/PlaceholderPage';

export default {
  name: 'Main',
  components: { PlaceholderPage },
};
</script>

<style scoped>

</style>
