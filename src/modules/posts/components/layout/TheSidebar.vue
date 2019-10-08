<template>
  <b-nav class="sidebar col-md-2 d-none d-md-block bg-light">
    <b-nav-item active :to="{ name: 'posts-list' }">Posts</b-nav-item>
  </b-nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/design/index.scss';

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  // padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
</style>
