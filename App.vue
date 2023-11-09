<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="app">
    <TheHeader class="header" />

    <main class="main">
      <NuxtPage />
    </main>

    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
.app{
  display: flex;
  flex-direction: column;
  height: 100vh;

}

.header{
  flex-grow: 0;
}

.main{
  flex-grow: 1;
}

.footer{
  flex-grow: 0;
}
</style>
