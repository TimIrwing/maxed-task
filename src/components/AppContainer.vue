<template>
  <div class="AppContainer">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
};
</script>

<style scoped>
.AppContainer {
  width: 100%;
  height: 100%;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
