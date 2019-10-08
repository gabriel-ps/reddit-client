<template>
  <AppContainer class="posts-list">
    <b-row>
      <TheSidebar />
      <main class="main col-md-9 ml-sm-auto col-lg-10 px-4">
        <RouterView />
      </main>
    </b-row>
  </AppContainer>
</template>

<script>
import TheSidebar from '@/modules/posts/components/layout/TheSidebar.vue'

export default {
  components: {
    TheSidebar
  }
}
</script>
