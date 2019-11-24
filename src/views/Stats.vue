<template>
 <PlaceholderPage :img="{ alt: 'статистика', src: require('@/assets/stats.svg') }"
                  text="Статистика"/>
</template>

<script>
import PlaceholderPage from '@/components/PlaceholderPage';

export default {
  name: 'Stats',
  components: { PlaceholderPage },
};
</script>

<style scoped>

</style>
