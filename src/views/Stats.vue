<template>
 <div class="py-12">
   <PlaceholderPage :img="{ alt: 'статистика', src: require('@/assets/stats.svg') }"
                    text="Статистика"/>
 </div>
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
