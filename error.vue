<script setup>
defineProps({
  error: Object,
})
function handleClearError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">
      {{ error.statusCode }}
    </p>
    <p class="mt-7 text-3xl">
      {{ error.message }}
    </p>
    <button class="mt-7 btn" @click="handleClearError">
      Go Home
    </button>
  </div>
</template>
