<template>
  <div id="app">
    <AppContainer class="main-container">
      <TheSidebar />
      <main class="main">
        <RouterView />
      </main>
    </AppContainer>
  </div>
</template>

<script>
import TheSidebar from '@/modules/core/components/layout/TheSidebar.vue'

export default {
  components: {
    TheSidebar
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>

<style lang="scss" scoped>
@import '@/assets/styles/design/index.scss';

#app {
  font-family: $system-default-font-family;

  .main-container {
    display: flex;

    .main {
      width: 100%;
    }
  }
}
</style>
