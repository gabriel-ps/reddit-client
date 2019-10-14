<template>
  <b-nav class="sidebar col-md-2 d-none d-md-block bg-light">
    <b-nav-item>
      <h1 class="sidebar__item__h1">Reddit Posts</h1>
    </b-nav-item>
    <b-nav-item
      class="sidebar__item"
      v-for="post in posts"
      :key="post.uniqueId"
    >
      <p class="sidebar__item__author">{{ post.author }}</p>
      <p class="sidebar__item__created-time"> - {{ post.relativeCreatedTime }}</p>
      <img
        :src="post.thumbnail.url"
        :width="post.thumbnail.width"
        :height="post.thumbnail.height"
        :alt="post.title"
      />
      <h2 class="sidebar__item__title">{{ post.title }}</h2>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapGetters } from 'vuex'

const module = 'posts'

export default {
  computed: {
    ...mapGetters(module, ['posts'])
  }
}
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
  overflow-y: scroll;

  &__item {
    border-bottom: 1px solid;
    &__h1 {
      font-size: 1.3rem;
    }
    &__author {
      display: inline;
    }
    &__created-time {
      font-size: 0.8rem;
      display: inline;
    }
    &__title {
      font-size: 1rem;
      display: block;
    }
  }
}
</style>
