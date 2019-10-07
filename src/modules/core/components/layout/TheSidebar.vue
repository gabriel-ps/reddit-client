<template>
  <nav class="sidebar">
    <ul>
      <li>
        <AppLink :to="{ name: 'posts-list' }">Posts</AppLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/design/index.scss';

.sidebar {
  // border: 1px solid #e6e9ef;
  padding: 0;

  ul {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;

    li {
      list-style-type: none;
      white-space: nowrap;
      // margin: 13px 0;
      border: 1px solid #e6e9ef;
      border-radius: $size-input-border-radius;

      a {
        display: block;
        padding: 16px;
        // router-link-exact-active
        &.router-link-active {
          background: #fafbfc;
          border-left: 5px solid #344279;
        }
      }
    }
  }
}
</style>
