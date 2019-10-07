<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
  >
    <slot />
  </a>
  <RouterLink v-else :to="to">
    <slot />
  </RouterLink>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/design/index.scss';

a, a:visited {
  color: $color-link-text;
  text-transform: uppercase;
  text-decoration: none;

  // router-link-exact-active
  &.router-link-active {
    color: #5c5c5c;
  }
}
</style>
