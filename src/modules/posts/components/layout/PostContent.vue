<template>
  <AppContainer
    v-if="currentPost"
    class="post-content"
  >
    <b-row>
      <b-col>
        <h1>{{ currentPost.title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img
          :src="currentPost.thumbnail.url"
          :width="currentPost.thumbnail.width"
          :height="currentPost.thumbnail.height"
          :alt="currentPost.title"
        />
      </b-col>
    </b-row>
  </AppContainer>
</template>

<script>
import { mapGetters } from 'vuex'

const module = 'posts'

export default {
  computed: {
    ...mapGetters(module, ['currentPost'])
  }
}
</script>
